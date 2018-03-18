package com.gyq.im.common.models.wrapper;


import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.models.ResponseEntity;
import com.gyq.im.common.exception.BaseException;

/**
 * 消息封装工厂
 *
 * @author gaoyaqiu
 */
public class ResponseFactory {

    public static <M> ResponseEntity<M> wrapper() {
        return ResponseEntity.builder()
                .setMessage(ApiCodeDefined.SUCCESS)
                .build();
    }

    public static <M> ResponseEntity<M> wrapper(M data) {
        return ResponseEntity.builder()
                .setMessage(ApiCodeDefined.SUCCESS)
                .setData(data)
                .build();
    }

    public static <M> ResponseEntity<M> wrapper(BaseException ex) {
        return ResponseEntity.builder()
                .setExecption(ex)
                .build();
    }

    public static <M> ResponseEntity<M> wrapper(M data, ApiCodeDefined msg) {
        return ResponseEntity.builder()
                .setMessage(msg)
                .setData(data)
                .build();
    }

    public static ResponseEntity wrapper(ApiCodeDefined msg) {
        return ResponseEntity.builder()
                .setMessage(msg)
                .build();
    }

}
