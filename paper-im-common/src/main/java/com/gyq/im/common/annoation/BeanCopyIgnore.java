package com.gyq.im.common.annoation;

import java.lang.annotation.*;

/**
 * Bean Copy 忽略字段注解.
 *
 * @auther gaoyaqiu
 * @date 2018/3/13
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface BeanCopyIgnore {

}
