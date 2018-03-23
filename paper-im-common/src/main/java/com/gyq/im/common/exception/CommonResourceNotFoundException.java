package com.gyq.im.common.exception;

import com.gyq.im.common.enums.IMessageEnum;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 404错误.
 *
 * @auther gaoyaqiu
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class CommonResourceNotFoundException extends BaseException {

    public CommonResourceNotFoundException(IMessageEnum msg) {
        super(msg);
    }
}
