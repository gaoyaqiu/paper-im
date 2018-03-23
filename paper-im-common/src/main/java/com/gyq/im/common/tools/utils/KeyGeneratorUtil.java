package com.gyq.im.common.tools.utils;

import com.gyq.im.common.tools.keygen.IPSectionKeyGenerator;

/**
 * 获取分布式id工具类.
 *
 * @auther gaoyaqiu
 * @date 2018/3/23
 */
public final class KeyGeneratorUtil {

    public static long getKey() {
        final IPSectionKeyGenerator ipSectionKeyGenerator = new IPSectionKeyGenerator();
        return (long) ipSectionKeyGenerator.generateKey();
    }
}
