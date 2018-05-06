package com.gyq.im.core.entity;

import java.io.Serializable;
public class GyqUserGroups implements Serializable {
    private Long ugId;

    private Long gId;

    private Long userUid;

    private String gName;

    private Integer ugStatus;

    private Long ugCreated;

    private Long ugUpdated;

    private Long ugDeleted;

    private static final long serialVersionUID = 1L;

    public Long getUgId() {
        return ugId;
    }

    public void setUgId(Long ugId) {
        this.ugId = ugId;
    }

    public Long getgId() {
        return gId;
    }

    public void setgId(Long gId) {
        this.gId = gId;
    }

    public Long getUserUid() {
        return userUid;
    }

    public void setUserUid(Long userUid) {
        this.userUid = userUid;
    }

    public String getgName() {
        return gName;
    }

    public void setgName(String gName) {
        this.gName = gName;
    }

    public Integer getUgStatus() {
        return ugStatus;
    }

    public void setUgStatus(Integer ugStatus) {
        this.ugStatus = ugStatus;
    }

    public Long getUgCreated() {
        return ugCreated;
    }

    public void setUgCreated(Long ugCreated) {
        this.ugCreated = ugCreated;
    }

    public Long getUgUpdated() {
        return ugUpdated;
    }

    public void setUgUpdated(Long ugUpdated) {
        this.ugUpdated = ugUpdated;
    }

    public Long getUgDeleted() {
        return ugDeleted;
    }

    public void setUgDeleted(Long ugDeleted) {
        this.ugDeleted = ugDeleted;
    }
}