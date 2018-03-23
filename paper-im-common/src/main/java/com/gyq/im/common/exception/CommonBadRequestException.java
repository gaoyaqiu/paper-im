package com.gyq.im.common.exception;

import com.gyq.im.common.enums.IMessageEnum;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

/**
 * 400错误.
 *
 * @auther gaoyaqiu
 */
@ResponseStatus(BAD_REQUEST)
public class CommonBadRequestException extends BaseException {

    public CommonBadRequestException(IMessageEnum msg) {
        super(msg);
    }
}
