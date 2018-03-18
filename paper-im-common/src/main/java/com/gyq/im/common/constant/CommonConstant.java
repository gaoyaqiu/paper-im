package com.gyq.im.common.constant;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.gyq.im.common.enums.IEnum;


/**
 * 公共常量.
 *
 * @author gaoyaqiu
 */
public class CommonConstant {

    /**
     * 数据状态
     */
    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    public enum Status implements IEnum<Integer, String> {
        NEW(1, "初始化"),
        UPDATED(2, "已更新"),
        DELETED(3, "已删除");

        Integer value;
        String desc;

        Status(Integer value, String desc) {

            this.value = value;
            this.desc = desc;
        }

        @Override
        public Integer getValue() {

            return this.value;
        }

        @Override
        public String getDesc() {

            return this.desc;
        }

        public static String getLocaleDesc(Integer value) {

            for (Status s : Status.values()) {
                if (s.value.intValue() == value.intValue()) {
                    return s.getDesc();
                }
            }
            return "";
        }
    }
}
