package com.gyq.im.common.tools.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * 生成MD5.
 *
 * @auther gaoyaqiu
 */
public class MD5EncryptUtil {

    public static byte[] md5(byte[] input)
            throws NoSuchAlgorithmException {
        MessageDigest alg = MessageDigest.getInstance("MD5");
        alg.update(input);
        return alg.digest();
    }

    public static String md5(String input) throws NoSuchAlgorithmException {
        byte[] arr = md5(input.getBytes());
        return tohex(arr);
    }

    public static String md52hex(String input) throws NoSuchAlgorithmException {
        byte[] arr = md5(input.getBytes());
        return byte2hex(arr);
    }

    public static String byte2hex(byte[] b)
            throws NoSuchAlgorithmException {
        StringBuffer hs = new StringBuffer();
        String stmp = "";
        for (int i = 0; i < b.length; ++i) {
            stmp = Integer.toHexString(b[i] & 0xFF);

            if (stmp.length() == 1)
                hs.append('0').append(stmp);
            else {
                hs.append(stmp);
            }

            if (i < b.length - 1)
                hs.append(':');

        }

        return hs.toString().toUpperCase();
    }

    public static String tohex(byte[] input) throws NoSuchAlgorithmException {
        char[] hexDigits = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};

        int j = input.length;
        char[] str = new char[j * 2];
        int k = 0;
        for (int i = 0; i < j; ++i) {
            byte byte0 = input[i];
            str[(k++)] = hexDigits[(byte0 >>> 4 & 0xF)];
            str[(k++)] = hexDigits[(byte0 & 0xF)];
        }
        return new String(str);
    }
}