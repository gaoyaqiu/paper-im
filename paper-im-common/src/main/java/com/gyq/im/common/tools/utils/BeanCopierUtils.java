package com.gyq.im.common.tools.utils;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.sf.cglib.beans.BeanCopier;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 使用Cglib BeanCopier拷贝对象.
 *
 * @author gaoyaqiu
 */
@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class BeanCopierUtils {

    // 对象放入缓存提升copy效率
    private static Map<String, BeanCopier> beanCopierMap = new ConcurrentHashMap<>();

    /**
     * 只拷贝类型相同的属性.
     *
     * @param source 源对象
     * @param target 目标对象
     */
    public static void copyProperties(Object source, Object target) {

        String beanKey = source.toString() + target.toString();

        BeanCopier copier = null;
        if (!beanCopierMap.containsKey(beanKey)) {
            copier = BeanCopier.create(source.getClass(), target.getClass(), false);
            beanCopierMap.put(beanKey, copier);
        } else {
            copier = beanCopierMap.get(beanKey);
        }

        copier.copy(source, target, null);
    }
}
