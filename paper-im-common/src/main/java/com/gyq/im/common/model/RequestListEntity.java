package com.gyq.im.common.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.gyq.im.common.annoation.BeanCopyIgnore;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

/**
 * 分页请求参数
 *
 * @author gaoyaqiu
 */
@Getter
@Setter
public class RequestListEntity implements Serializable {

    @BeanCopyIgnore
    private static final long serialVersionUID = 1L;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer maxRecord;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer pageNum;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer pageSize;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer total;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Order> orderList;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @BeanCopyIgnore
    private String timestamp;
}
