package com.gyq.im.common.exception;

import com.gyq.im.common.enums.IMessageEnum;
import lombok.Getter;

/**
 * 异常基类.
 *
 * @auther gaoyaqiu
 */
public abstract class BaseException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    @Getter
    private String code;
    private IMessageEnum error;

    protected BaseException(String code, String msg) {
        super(msg);
        this.code = code;
    }

    protected BaseException(String message, Throwable throwable) {
        super(message, throwable);
    }

    protected BaseException(IMessageEnum msg) {
        super(msg == null ? "" : msg.getDesc());
        this.error = msg;
        this.code = msg == null ? null : msg.getValue();
    }
}
