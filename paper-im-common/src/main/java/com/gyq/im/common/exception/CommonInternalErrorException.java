package com.gyq.im.common.exception;

import com.gyq.im.common.enums.IMessageEnum;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

/**
 * 500错误.
 *
 * @auther gaoyaqiu
 */
@ResponseStatus(INTERNAL_SERVER_ERROR)
public class CommonInternalErrorException extends BaseException {

    public CommonInternalErrorException(IMessageEnum msg) {
        super(msg);
    }
}
