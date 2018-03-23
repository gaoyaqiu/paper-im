package com.gyq.im.common.enums;

/**
 * api接口code定义.
 *
 * @author gaoyaqiu
 */
public enum ApiCodeDefined implements IMessageEnum {

    SUCCESS("20000", "成功"),

    ERROR("50000", "系统异常"),

    ERROR_BUSY("50001", "系统繁忙,请稍后再试"),

    ILLEGALERROR("50002", "非法请求"),

    ILLEGAL_OPERATION("50003", "非法操作"),

    REPEAT_OPERATION("50004", "请不要重复操作"),

    ERR_UNKOWEN("50005", "未知异常"),

    ERROR_DATA_NOT_FOUNT("50005", "数据不存在"),

    URL_NOT_FOUND("50006", "接口地址没有找到"),

    ERROR_PARAMETER("50007", "参数错误"),

    ERROR_SYNTAX("50008", "参数语法错误"),

    ERROR_MISSING_PARAMETER("50009", "缺少必填参数"),

    ERROR_USER_DATA_NOT_FOUNT("60000", "用户数据不存在");

    private String code;
    private String msg;

    ApiCodeDefined(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    @Override
    public String getValue() {
        return this.code;
    }

    @Override
    public String getDesc() {
        return this.msg;
    }
}
