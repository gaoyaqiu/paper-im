package com.gyq.im.common.annoation;

import java.lang.annotation.*;

/**
 * 允许接收的值是空或者null.
 *
 * @auther gaoyaqiu
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface BeanCopyAllowNull {

}