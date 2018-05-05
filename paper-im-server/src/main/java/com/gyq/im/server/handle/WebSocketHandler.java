package com.gyq.im.server.handle;

import com.gyq.im.common.context.SpringContextUtil;
import com.gyq.im.common.tools.utils.JsonUtil;
import com.gyq.im.server.controller.user.User;
import com.gyq.im.server.service.user.IUserService;
import lombok.extern.slf4j.Slf4j;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static com.google.common.collect.Maps.newHashMap;

/**
 * 消息处理器.
 *
 * @auther gaoyaqiu
 * @date 2018/3/14
 */
@Slf4j
@ServerEndpoint("/server/{userLoginName}")
public class WebSocketHandler {

    /**
     * 保存websocket session
     * key->userLoginName
     */
    private static final Map<String, Session> WS_SESSION = new ConcurrentHashMap<>();

    /**
     * 存储sessionId和用户映射关系.
     * key->sessionId
     * value->userLoginName
     */
    private static final Map<String, String> USER_SESSION = new ConcurrentHashMap<>();

    private final Object lock = new Object();

    @OnOpen
    public void onOpen(@PathParam("userLoginName") String userLoginName, Session session) throws IOException {
        log.debug("ChatWebSocketHandler onOpen");
        registerSession(session, userLoginName);

        log.debug("userLoginName[{}] 已连接, sessionId[{}], 当前用户数为:[{}]", userLoginName, session.getId(), WS_SESSION.size());
    }

    @OnClose
    public void onClose(Session session) throws IOException {
        runregisterSession(session);
        log.debug("websocket chat connection closed......剩余在线用户数: [{}]", WS_SESSION.size());
    }

    @OnMessage
    public void onMessage(String message, Session session) throws IOException {
        IUserService userService = (IUserService) SpringContextUtil.getBean("userServiceImpl");
        log.debug("接收到客户端消息---内容为[{}]", message);
        Map<String, Object> resMap = newHashMap();
        Map<String, Object> map = JsonUtil.json2Map(null, message);

        // user 获取用户信息、同步个人信息、更新个人信息
        // notify 通知下线消息、下线系统消息、广播消息
        // sync 同步完成状态、同步群组人员完成状态
        // msg 发送消息、系统消息、历史消息、用户系统消息、查询历史消息、同步发送消息、广播消息
        // team 创建群组、发送群消息、添加群人员、删除群人员、更新群信息、获取群历史消息、同步所有群、同步群人员
        // friend 好友请求、同步好友请求、删除好友、同步删除好友、更新好友、同步更新好友、获取好友、同步好友信息
        String service = map.get("service").toString();
        String cmd = map.get("cmd").toString();
        String to, from, msg;

        //  用户消息
        if ("user".equals(service)) {
            Map<String, Object> params = (Map<String, Object>) map.get("params");
            resMap.put("service", service);
            resMap.put("cmd", cmd);

            if ("syncMyInfo".equals(cmd)) {
                from = params.get("from").toString();

                msg = getUsers(userService, resMap, from);
                sendMessageTo(msg, from);
                log.debug("向[{}]发送[{}]消息---内容为[{}]", from, cmd, msg);
            }

            if ("getUsers".equals(cmd)) {
                from = params.get("from").toString();
                String loginName = params.get("loginName").toString();

                msg = getUsers(userService, resMap, loginName);
                sendMessageTo(msg, from);
                log.debug("向[{}]发送[{}]消息---内容为[{}]", from, cmd, msg);
            }

        } else if ("".equals(service)) {

        }


 /*       String to = map.get("to").toString();
        String from = map.get("from").toString();
        String msg = map.get("message").toString();
        log.debug("[{}]向[{}]发送消息[{}]", from, to, msg);

        if (!to.equals("all")) {
            Map<String, Object> messageMap = new HashMap<>();
            messageMap.put("from", from);
            messageMap.put("to", to);
            messageMap.put("message", msg);

            sendMessageTo(JsonUtil.object2Json(messageMap), to);
        } else {
            sendMessageAll("给所有人");
        }*/
    }

    private String getUsers(IUserService userService, Map<String, Object> resMap, String loginName) {
        User user = userService.getUser(loginName);
        resMap.put("response", user);
        String msg = JsonUtil.object2Json(resMap);
        return msg;
    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("socket出现异常", error);
    }

    /**
     * 给个人发送消息.
     *
     * @param message
     * @param to
     */
    public void sendMessageTo(String message, String to) {
        if (WS_SESSION.size() > 0 && null != WS_SESSION.get(to)) {
            Session session = WS_SESSION.get(to);
            session.getAsyncRemote().sendText(message);
        }
    }

    /**
     * 给所有人发送消息.
     *
     * @param message
     * @throws IOException
     */
    public void sendMessageAll(String message) throws IOException {
        if (WS_SESSION.size() > 0) {
            for (Session session : WS_SESSION.values()) {
                session.getAsyncRemote().sendText(message);
            }
        }
    }

    /**
     * 注册用户.
     *
     * @param session
     * @param userLoginName
     */
    private void registerSession(Session session, String userLoginName) {
        Object obj1 = this.lock;
        synchronized (this.lock) {
            WS_SESSION.put(userLoginName, session);

            USER_SESSION.put(session.getId(), userLoginName);
        }
    }

    /**
     * 注销用户.
     *
     * @param session
     */
    private void runregisterSession(Session session) {
        Object obj1 = this.lock;
        synchronized (this.lock) {
            String userLoginName = USER_SESSION.get(session.getId());
            USER_SESSION.remove(session.getId());
            WS_SESSION.remove(userLoginName);
        }
    }

}
