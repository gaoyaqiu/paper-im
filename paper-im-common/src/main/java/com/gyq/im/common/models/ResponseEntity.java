package com.gyq.im.common.models;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.google.common.base.Strings;
import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.enums.IMessageEnum;
import com.gyq.im.common.tools.utils.DateUtil;
import com.gyq.im.common.exception.BaseException;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Map;

/**
 * 返回数据封装对象.
 *
 * @author gaoyaqiu
 */
@Getter
@Setter
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class ResponseEntity<M> implements Serializable {

    private static final long serialVersionUID = 1L;

    // 未知异常
    private static final String ERR_UNKNOWN = "ERR_UNKNOWN";

    private String code;
    private String msg;
    private Long timestamp;
    private String sign;
    private String requestId;

    private M data;

    private Map<String, Object> attr;

    public ResponseEntity(BaseException ex) {
        this();

        String exCode = ex.getCode();
        if (Strings.isNullOrEmpty(exCode)) {
            exCode = ERR_UNKNOWN;
        }
        this.code = exCode;
        this.msg = ex.getMessage();
    }

    public ResponseEntity(M data, IMessageEnum msgDefined) {
        this();

        String enumCode = msgDefined.getValue();
        if (Strings.isNullOrEmpty(enumCode)) {
            enumCode = ERR_UNKNOWN;
        }

        this.data = data;
        this.code = enumCode;
        this.msg = msgDefined.getDesc();
    }

    public ResponseEntity(IMessageEnum msgDefined) {
        this();
        String enumCode = msgDefined.getValue();
        if (Strings.isNullOrEmpty(enumCode)) {
            enumCode = ERR_UNKNOWN;
        }

        this.code = enumCode;
        this.msg = msgDefined.getDesc();
    }

    public ResponseEntity() {
        this.data = null;
        this.code = null;
        this.msg = null;
        this.requestId = null;
        this.timestamp = DateUtil.getCurrentTimeMills();
    }

    public static <M> Builder builder() {
        return new Builder<M>();
    }

    public static class Builder<M> {
        ResponseEntity<M> entity = new ResponseEntity(ApiCodeDefined.SUCCESS);

        Builder() {
        }
        public Builder<M> setData(M data) {
            entity.setData(data);
            return this;
        }
        public Builder<M> setMessage(IMessageEnum message) {
            entity.code = message.getValue();
            entity.msg = message.getDesc();
            return this;
        }
        public Builder<M> setExecption(BaseException ex) {
            String exCode = ex.getCode();
            if (Strings.isNullOrEmpty(exCode)) {
                exCode = ERR_UNKNOWN;
            }
            entity.code = exCode;
            entity.msg = ex.getMessage();
            return this;
        }
        public Builder sign(String sign) {
            entity.sign = sign;
            return this;
        }

        public ResponseEntity<M> build(){
            return entity;
        }
    }
}
