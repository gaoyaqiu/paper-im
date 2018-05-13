package com.gyq.im.server.service.message;

import lombok.Getter;
import lombok.Setter;

/**
 * @author gaoyaqiu
 * @date 2018/5/13
 */
@Getter
@Setter
public class Message {

    private Long msgId;

    private Long fromId;

    private Long toId;

    private String msgContent;

    private Integer msgBizStatus;

    private Integer msgStatus;

    private Long msgCreated;

    // 会话id
    private String sessionId;

    private String type;
}
