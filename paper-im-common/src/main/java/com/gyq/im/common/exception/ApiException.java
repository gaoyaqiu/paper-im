package com.gyq.im.common.exception;


import com.gyq.im.common.enums.IMessageEnum;

/**
 * api异常.
 *
 * @auther gaoyaqiu
 */
public class ApiException extends BaseException {

    public ApiException(IMessageEnum msg) {
        super(msg);
    }
    public ApiException(String code, String msg){
        super(code, msg);
    }
    public ApiException(String code, String msg, Throwable t){
        super(code, msg,t);
    }
}

