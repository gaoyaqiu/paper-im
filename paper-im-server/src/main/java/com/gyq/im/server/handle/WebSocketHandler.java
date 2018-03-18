package com.gyq.im.server.handle;

import com.gyq.im.common.tools.utils.JsonUtil;
import lombok.extern.slf4j.Slf4j;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 消息处理器.
 *
 * @auther gaoyaqiu
 * @date 2018/3/14
 */
@Slf4j
@ServerEndpoint("/server/{userId}")
public class WebSocketHandler {

    // 存放用户信息
    private static final Map<String, Session> USER_SESSION = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(@PathParam("userId") String userId, Session session) throws IOException {
        log.debug("ChatWebSocketHandler onOpen");
        USER_SESSION.put(userId, session);
        log.debug("userid[{}] 已连接, 当前用户数为:[{}]", userId, USER_SESSION.size());
    }

    @OnClose
    public void onClose(Session session) throws IOException {
        Map<String, String> map = session.getPathParameters();

        log.debug(map.get("userId"));
        USER_SESSION.remove(map.get("userId"));

        log.debug("websocket chat connection closed......剩余在线用户数: [{}]", USER_SESSION.size());
    }

    @OnMessage
    public void onMessage(String message) throws IOException {

        Map<String, Object> params = JsonUtil.json2Map(null, message);
        String to = params.get("to").toString();
        String from = params.get("from").toString();
        String msg = params.get("message").toString();

        if (!to.equals("all")){
            Map<String, Object> messageMap = new HashMap<>();
            messageMap.put("from", from);
            messageMap.put("to", to);
            messageMap.put("message", msg);

            sendMessageTo(JsonUtil.object2Json(messageMap), to);
        }else{
            sendMessageAll("给所有人");
        }
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
        if (USER_SESSION.size() > 0 && null != USER_SESSION.get(to)) {
            Session session = USER_SESSION.get(to);
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
        if (USER_SESSION.size() > 0) {
            for (Session session : USER_SESSION.values()){
                session.getAsyncRemote().sendText(message);
            }
        }
    }
}
