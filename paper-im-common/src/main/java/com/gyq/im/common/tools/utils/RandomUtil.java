package com.gyq.im.common.tools.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

/**
 * 随机数生成工具类.
 *
 * @auther gaoyaqiu
 */
public class RandomUtil {

    private static final char[] ALPHABETS_LOWER = {'a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

    private static final char[] ALPHABETS_UPPER = {'A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

    private static final char[] ALPHABETS_NUMBER = {'0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9'};

    private static final char[] ALPHABETS_ALL = mergeArray(
            ALPHABETS_LOWER, ALPHABETS_UPPER, ALPHABETS_NUMBER);

    private RandomUtil() {
        throw new Error("Don't let anyone instantiate this class.");
    }

    /**
     * _2013_03_12_20_05_01_101 Get Random String
     *
     * @return
     */
    public static String getTimeRandom() {
        SimpleDateFormat sdf = new SimpleDateFormat("_yyyy_MM_dd_HH_mm_ss_");
        Random dom = new Random();
        return (sdf.format(new Date()) + dom.nextInt(255));
    }

    /***
     *
     * @return _13_03_123620_04_45
     */
    public static String getTimeRandom2() {
        SimpleDateFormat sdf = new SimpleDateFormat("_yy_MM_dd__HH_mm_ss");
        Random dom = new Random();
        return (sdf.format(new Date()).replace("__",
                String.valueOf(dom.nextInt(255))));
    }

    /**
     * 产生无重复的随机数 sumInt:总样本 (0....sumInt-1) resultSum： 产生的随机数个数 ，包含零
     *
     * @return
     */
    public static int[] randoms(int sumInt, int resultSum) {
        // Total sample
        int send[] = new int[sumInt];// 0....(sumInt-1)
        for (int i = 0; i < sumInt; i++) {
            send[i] = i;
        }
        return randoms(send, resultSum);
    }

    /***
     * get random char[]
     *
     * @param quantity
     * @return
     */
    public static char[] getRandomArr(int quantity) {
        int maxLeng = ALPHABETS_ALL.length;//共52个字母（包括大小写）
        char[] result = new char[quantity];
        if (quantity > maxLeng) {//如果超过52个大小写字母，则分quantity 次获取，每次获取一个字母
            for (int i = 0; i < quantity; i++) {
                result[i] = getRandomArr(1)[0];
            }
        } else {
            int[] indexs = randoms(maxLeng, quantity);
            for (int i = 0; i < indexs.length; i++) {
                int index = indexs[i];
                result[i] = ALPHABETS_ALL[index];
            }
        }
        // SystemUtil.printArray(indexs);
        return result;
    }


    /***
     * ，包含零
     * @param totalSample
     *            :total sample
     * @param resultSum
     *            :Specified number
     * @return
     */
    public static int[] randoms(int[] totalSample, int resultSum) {
        int temp1, temp2;
        Random r = new Random();
        int len = totalSample.length;// The length of the total sample
        int returnValue[] = new int[resultSum];// Random number to return
        for (int i = 0; i < resultSum; i++) {
            // temp1 = Math.abs(r.nextInt()) % len;
            temp1 = r.nextInt(len);// between 0 (inclusive) and the specified
            // value (exclusive)
            temp2 = totalSample[temp1];
            returnValue[i] = temp2;
            if (temp1 != len - 1) {
                totalSample[temp1] = totalSample[len - 1];
                totalSample[len - 1] = temp2;
            }
            len--;
        }
        return returnValue;
    }

    /***
     * 获取单个随机数，包含零
     *
     * @param totalSample
     *            :total sample
     *            :Specified number
     * @return
     */
    public static int randoms(int[] totalSample) {
        int temp1, temp2;
        Random r = new Random();
        int len = totalSample.length;// The length of the total sample
        // temp1 = Math.abs(r.nextInt()) % len;
        temp1 = r.nextInt(len);// between 0 (inclusive) and the specified
        // value (exclusive)
        temp2 = totalSample[temp1];
        return temp2;
    }

    /***
     * 获取单个随机数，包含零
     *
     * @param sumInt
     * @return
     */
    public static int randoms(int sumInt) {
        // Total sample
        int send[] = new int[sumInt];// 0....(sumInt-1)
        for (int i = 0; i < sumInt; i++) {
            send[i] = i;
        }
        return randoms(send);
    }


    /***
     * get Random String
     *
     * @param quantity
     * @return
     */
    public static String getRandomStr(int quantity) {
        char[] result = getRandomArr(quantity);
        return new String(result);
    }

    /***
     * 合并字符数组
     *
     * @param a
     * @return
     */
    private static char[] mergeArray(char[]... a) {
        // 合并完之后数组的总长度
        int index = 0;
        int sum = 0;
        for (int i = 0; i < a.length; i++) {
            sum = sum + a[i].length;
        }
        char[] result = new char[sum];
        for (int i = 0; i < a.length; i++) {
            int lengthOne = a[i].length;
            if (lengthOne == 0) {
                continue;
            }
            // 拷贝数组
            System.arraycopy(a[i], 0, result, index, lengthOne);
            index = index + lengthOne;
        }
        return result;
    }
}
