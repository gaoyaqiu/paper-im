package com.gyq.im.core.entity;

import java.io.Serializable;
public class GyqGroups implements Serializable {
    private Long gId;

    private Long gNumber;

    private String gName;

    private String gInfo;

    private Integer gStatus;

    private Long gCreated;

    private Long gUpdated;

    private Long gDeleted;

    private static final long serialVersionUID = 1L;

    public Long getgId() {
        return gId;
    }

    public void setgId(Long gId) {
        this.gId = gId;
    }

    public Long getgNumber() {
        return gNumber;
    }

    public void setgNumber(Long gNumber) {
        this.gNumber = gNumber;
    }

    public String getgName() {
        return gName;
    }

    public void setgName(String gName) {
        this.gName = gName;
    }

    public String getgInfo() {
        return gInfo;
    }

    public void setgInfo(String gInfo) {
        this.gInfo = gInfo;
    }

    public Integer getgStatus() {
        return gStatus;
    }

    public void setgStatus(Integer gStatus) {
        this.gStatus = gStatus;
    }

    public Long getgCreated() {
        return gCreated;
    }

    public void setgCreated(Long gCreated) {
        this.gCreated = gCreated;
    }

    public Long getgUpdated() {
        return gUpdated;
    }

    public void setgUpdated(Long gUpdated) {
        this.gUpdated = gUpdated;
    }

    public Long getgDeleted() {
        return gDeleted;
    }

    public void setgDeleted(Long gDeleted) {
        this.gDeleted = gDeleted;
    }
}