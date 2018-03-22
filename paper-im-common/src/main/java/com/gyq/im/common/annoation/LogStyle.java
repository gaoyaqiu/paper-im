package com.gyq.im.common.annoation;

import java.lang.annotation.*;

/**
 * 日志注解.
 *
 * @auther gaoyaqiu
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
@Inherited
public @interface LogStyle {

    /**
     * 版本.
     *
     * @return
     */
    String version() default "No printed version";


    /**
     * 方法执行之前的描述.
     *
     * @return
     */
    String beforeDesc() default "";


    /**
     * 方法执行之后描述.
     *
     * @return
     */
    String afterDesc() default "";
}
