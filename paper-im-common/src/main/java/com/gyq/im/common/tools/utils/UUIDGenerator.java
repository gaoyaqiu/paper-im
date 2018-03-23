package com.gyq.im.common.tools.utils;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetAddress;
import java.security.SecureRandom;

/**
 * UUID生成规则.
 *
 * @author gaoyaqiu
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class UUIDGenerator {

    private static SecureRandom seederStatic = null;
    private static String midValueStatic = null; //根据当前机器的IP地址存储8位字符串
    private static String midValue = null;
    private static SecureRandom seeder = null;

    private static final Logger logger = LoggerFactory.getLogger(UUIDGenerator.class);

    static {
        try {
            // 返回本机InetAddress 对象的原始 IP 地址
            byte[] address = InetAddress.getLocalHost().getAddress();

            // 1.根据当前机器的IP地址得到一个8位的最小值
            midValueStatic = toHex(toInt(address), 8);

            seederStatic = new SecureRandom();
            seederStatic.nextInt();

            // 2.得到一个16位的最小值（根据当前对象的hashcode得到一个8位的最小值和前一个8位最小值组合起来）
            midValue = midValueStatic + toHex(System.identityHashCode(UUIDGenerator.class), 8);

            seeder = new SecureRandom();
            seeder.nextInt();
        } catch (Exception ex) {
            logger.error("UUID error", ex);
        }
    }

    /**
     * 根据一个对象生成32位随机串
     *
     * @param obj
     * @return
     */
    public static String generate(Object obj) {
        StringBuilder uid = new StringBuilder(32);
        long currentTimeMillis = System.currentTimeMillis();
        uid.append(toHex((int) (currentTimeMillis), 8));
        uid.append(midValueStatic);
        uid.append(toHex(System.identityHashCode(obj), 8));
        uid.append(toHex(getRandom(), 8));
        return uid.toString();
    }

    /**
     * 生成32位随机串
     * 规则描述：当前系统时间毫秒数 + (本机IP地址 + 当前对象hashcode) + 随机数
     * 8 + 16 + 8 = 32位
     *
     * @return
     */
    public static String generate() {
        StringBuilder uid = new StringBuilder(32);
        long currentTimeMillis = System.currentTimeMillis();
        uid.append(toHex((int) (currentTimeMillis), 8));
        uid.append(midValue);
        uid.append(toHex(seeder.nextInt(), 8));
        return uid.toString();
    }

    private static String toHex(int value, int length) {
        char[] hexDigits = {
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F'
        };
        StringBuilder buffer = new StringBuilder(length);
        int shift = length - 1 << 2;
        for (int i = -1; ++i < length; ) {
            buffer.append(hexDigits[value >> shift & 15]);
            value <<= 4;
        }

        return buffer.toString();
    }

    private static int toInt(byte[] bytes) {
        int value = 0;
        for (int i = -1; ++i < bytes.length; ) {
            value <<= 8;
            value |= bytes[i] & 255;
        }

        return value;
    }

    private static synchronized int getRandom() {
        return seederStatic.nextInt();
    }
}
