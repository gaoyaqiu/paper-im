package com.gyq.im.core.entity;

import java.io.Serializable;
public class GyqFriends implements Serializable {
    private Long fId;

    private Long fUid;

    private Long fFriendUid;

    private Integer fStatus;

    private Long fCreated;

    private Long fUpdated;

    private Long fDeleted;

    private static final long serialVersionUID = 1L;

    public Long getfId() {
        return fId;
    }

    public void setfId(Long fId) {
        this.fId = fId;
    }

    public Long getfUid() {
        return fUid;
    }

    public void setfUid(Long fUid) {
        this.fUid = fUid;
    }

    public Long getfFriendUid() {
        return fFriendUid;
    }

    public void setfFriendUid(Long fFriendUid) {
        this.fFriendUid = fFriendUid;
    }

    public Integer getfStatus() {
        return fStatus;
    }

    public void setfStatus(Integer fStatus) {
        this.fStatus = fStatus;
    }

    public Long getfCreated() {
        return fCreated;
    }

    public void setfCreated(Long fCreated) {
        this.fCreated = fCreated;
    }

    public Long getfUpdated() {
        return fUpdated;
    }

    public void setfUpdated(Long fUpdated) {
        this.fUpdated = fUpdated;
    }

    public Long getfDeleted() {
        return fDeleted;
    }

    public void setfDeleted(Long fDeleted) {
        this.fDeleted = fDeleted;
    }
}