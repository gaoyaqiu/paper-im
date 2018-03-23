package com.gyq.im.common.exception;

import com.google.common.base.Strings;
import com.gyq.im.common.context.ExecuteContext;
import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.enums.IMessageEnum;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 定义返回参数.
 *
 * @auther gaoyaqiu
 */
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public final class CommonResponse<M> {

    private String code;

    private String msg;

    private String requestId;

    private M data;

    public CommonResponse() {
        this.code = ApiCodeDefined.SUCCESS.getValue();
        this.msg = ApiCodeDefined.SUCCESS.getDesc();
        this.requestId = ExecuteContext.getContext().getRequestId();
    }

    public CommonResponse(IMessageEnum msgDefined) {
        String enumCode = msgDefined.getValue();
        if (Strings.isNullOrEmpty(enumCode)) {
            enumCode = ApiCodeDefined.ERR_UNKOWEN.getValue();
        }

        this.code = enumCode;
        this.msg = msgDefined.getDesc();
        this.requestId = ExecuteContext.getContext().getRequestId();
    }

    public CommonResponse(String code, String msg) {
        this.code = code;
        this.msg = msg;
        this.requestId = ExecuteContext.getContext().getRequestId();
    }

    public CommonResponse(M data) {
        this.code = ApiCodeDefined.SUCCESS.getValue();
        this.msg = ApiCodeDefined.SUCCESS.getDesc();
        this.data = data;
        this.requestId = ExecuteContext.getContext().getRequestId();
    }
}
