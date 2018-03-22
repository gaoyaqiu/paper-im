package com.gyq.im.common.enums;

/**
 * api接口code定义.
 *
 * @author gaoyaqiu
 */
public enum ApiCodeDefined implements IMessageEnum {

    SUCCESS("成功"),

    ERROR("系统异常"),

    ERROR_BUSY("系统繁忙,请稍后再试"),

    ILLEGALERROR("非法请求"),

    ILLEGAL_OPERATION("非法操作"),

    REPEAT_OPERATION("请不要重复操作"),

    ERR_UNKOWEN("未知异常"),

    ERROR_DATA_NOT_FOUNT("数据不存在"),

    URL_NOT_FOUND("接口地址没有找到"),

    ERROR_PARAMETER("参数错误"),

    ERROR_SYNTAX("参数语法错误"),

    ERROR_MISSING_PARAMETER("缺少必填参数"),

    ERROR_USER_DATA_NOT_FOUNT("用户数据不存在");

    private String msg;

    ApiCodeDefined(String msg) {

        this.msg = msg;
    }

    @Override
    public String getValue() {

        return this.name();
    }

    @Override
    public String getDesc() {

        return this.msg;
    }
}
