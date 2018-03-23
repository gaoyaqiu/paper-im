package com.gyq.im.server.valid;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * jsr自定义校验bean.
 *
 * @auther gaoyaqiu
 */
@Getter
@Setter
public class Valid implements Serializable{
    private static final long serialVersionUID = 982912973564659307L;

    // 字段名称
    private String field;

    // 错误提示
    private String message;
}
