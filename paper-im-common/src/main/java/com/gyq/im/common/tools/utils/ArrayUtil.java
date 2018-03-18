package com.gyq.im.common.tools.utils;

import java.util.List;

/**
 * 数组相关操作
 *
 * @author gaoyaqiu
 */
public class ArrayUtil {

    public static <T> boolean isEmpty(T[] array) {

        return null == array || 0 == array.length;
    }

    /**
     * 把数组拼接成字符串, 仿 PHP 的 implode 方法
     *
     * @param separator 连接字串
     * @param array     数据数组
     * @param <T>
     * @return 返回拼接后的字串
     */
    public static <T> String implode(String separator, T[] array) {

        StringBuffer sb = new StringBuffer();
        // 取偏移值, length - 1, 减少判断
        int offset = array.length - 1;
        // 遍历数组, 并把数据推入 StringBuffer
        for (int i = 0; i < offset; i++) {
            sb.append(array[i]).append(separator);
        }

        // 如果偏移值 >= 0, 则把最后一个值推入 StringBuffer
        if (0 <= offset) {
            sb.append(array[offset]);
        }

        return sb.toString();
    }

    /**
     * 把字符串拼接成字符串, 仿 PHP 的 implode 方法
     *
     * @param array 数据数组
     * @param <T>
     * @return 返回拼接后的字串
     */
    public static <T> String implode(T[] array) {

        return ArrayUtil.implode("", array);
    }

    /**
     * 验证list是否为空
     *
     * @param list
     * @return true: 空, false: 非空
     */
    public static Boolean isNullOrEmpty(List list) {

        if (list != null && list.size() != 0) {
            return false;
        } else {
            return true;
        }
    }

}
