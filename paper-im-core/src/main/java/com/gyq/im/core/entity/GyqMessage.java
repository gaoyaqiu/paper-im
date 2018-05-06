package com.gyq.im.core.entity;

import java.io.Serializable;
public class GyqMessage implements Serializable {
    private Long msgId;

    private Long fromId;

    private Long toId;

    private String msgContent;

    private Integer msgBizStatus;

    private Integer msgStatus;

    private Long msgCreated;

    private Long msgUpdated;

    private Long msgDeleted;

    private static final long serialVersionUID = 1L;

    public Long getMsgId() {
        return msgId;
    }

    public void setMsgId(Long msgId) {
        this.msgId = msgId;
    }

    public Long getFromId() {
        return fromId;
    }

    public void setFromId(Long fromId) {
        this.fromId = fromId;
    }

    public Long getToId() {
        return toId;
    }

    public void setToId(Long toId) {
        this.toId = toId;
    }

    public String getMsgContent() {
        return msgContent;
    }

    public void setMsgContent(String msgContent) {
        this.msgContent = msgContent;
    }

    public Integer getMsgBizStatus() {
        return msgBizStatus;
    }

    public void setMsgBizStatus(Integer msgBizStatus) {
        this.msgBizStatus = msgBizStatus;
    }

    public Integer getMsgStatus() {
        return msgStatus;
    }

    public void setMsgStatus(Integer msgStatus) {
        this.msgStatus = msgStatus;
    }

    public Long getMsgCreated() {
        return msgCreated;
    }

    public void setMsgCreated(Long msgCreated) {
        this.msgCreated = msgCreated;
    }

    public Long getMsgUpdated() {
        return msgUpdated;
    }

    public void setMsgUpdated(Long msgUpdated) {
        this.msgUpdated = msgUpdated;
    }

    public Long getMsgDeleted() {
        return msgDeleted;
    }

    public void setMsgDeleted(Long msgDeleted) {
        this.msgDeleted = msgDeleted;
    }
}