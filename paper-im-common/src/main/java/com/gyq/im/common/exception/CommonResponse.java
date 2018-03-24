package com.gyq.im.common.exception;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.gyq.im.common.context.ExecuteContext;
import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.enums.IMessageEnum;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * 定义返回参数.
 *
 * @auther gaoyaqiu
 */
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public final class CommonResponse<M> {

    private final String code;

    private final String msg;

    private final String requestId;

    private final M data;

    public static Builder newBuilder() {
        return new Builder();
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    public static class Builder<M> {

        private String code = ApiCodeDefined.SUCCESS.getValue();

        private String msg = ApiCodeDefined.SUCCESS.getDesc();

        private String requestId = ExecuteContext.getContext().getRequestId();

        private M data;

        public Builder code(final String code) {
            this.code = code;
            return this;
        }

        public Builder msg(final String msg) {
            this.msg = msg;
            return this;
        }

        public Builder requestId(final String requestId) {
            this.requestId = requestId;
            return this;
        }

        public Builder data(final M data) {
            this.data = data;
            return this;
        }

        public final CommonResponse build() {
            return new CommonResponse(code, msg, requestId, data);
        }
    }

    public static CommonResponse of(IMessageEnum messageEnum){
        return CommonResponse.newBuilder().code(messageEnum.getValue()).msg(messageEnum.getDesc()).build();
    }

    public static CommonResponse of(String code, String msg){
        return CommonResponse.newBuilder().code(code).msg(msg).build();
    }
}
