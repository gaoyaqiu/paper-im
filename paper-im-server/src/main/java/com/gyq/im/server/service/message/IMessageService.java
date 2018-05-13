package com.gyq.im.server.service.message;

import com.gyq.im.core.entity.GyqMessage;

/**
 * @author gaoyaqiu
 * @date 2018/5/13
 */
public interface IMessageService {

    /**
     * 发送P2P消息.
     *
     * @param message
     * @return
     */
    Message sendP2PMsg(GyqMessage message);
}
