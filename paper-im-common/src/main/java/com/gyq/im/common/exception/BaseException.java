package com.gyq.im.common.exception;

import com.gyq.im.common.enums.IMessageEnum;
import lombok.extern.slf4j.Slf4j;

/**
 * 异常基类.
 *
 * @auther gaoyaqiu
 */
@Slf4j
public class BaseException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    private String code;
    private IMessageEnum error;

    public BaseException(String code, String msg) {
        super(msg);
        this.code = code;
    }

    public BaseException(String code, String msg, Throwable ex) {
        super(msg, ex);
        this.code = code;
    }

    public BaseException(IMessageEnum msg) {
        super(msg==null?"":msg.getDesc());
        this.error = msg;
        this.code = msg==null?"":msg.getValue();
    }

    public BaseException(IMessageEnum msg, Throwable ex) {
        super(msg==null?"":msg.getDesc(), ex);
        this.error = msg;
        this.code = msg==null?"":msg.getValue();
    }

    public BaseException(Throwable exception) {super(exception); }

    public String getCode() {
        return code;
    }
}
