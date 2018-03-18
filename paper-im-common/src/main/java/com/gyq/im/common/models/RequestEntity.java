package com.gyq.im.common.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.gyq.im.common.annoation.BeanCopyIgnore;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * 请求基本参数.
 *
 * @author gaoyaqiu
 */
@Setter
@Getter
public class RequestEntity implements Serializable {

    @BeanCopyIgnore
    private static final long serialVersionUID = 1L;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @BeanCopyIgnore
    private String timestamp;
}
