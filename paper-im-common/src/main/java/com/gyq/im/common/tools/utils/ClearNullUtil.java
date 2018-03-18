package com.gyq.im.common.tools.utils;

import java.util.Iterator;
import java.util.Map;

/**
 * 清除null数据.
 *
 * @author gaoyaqiu
 */
public class ClearNullUtil {

    /**
     * 清除 map中的 空值
     * @param param
     */
    public static void mapClear(Map param){
        if(param==null) {
            return;
        }
        Iterator<Map.Entry> it = param.entrySet().iterator();
        while(it.hasNext()) {
            Map.Entry<String, Object> entry = it.next();
            Object v = entry.getValue();
            if (v == null || v.toString().equals("")) {
                it.remove();
            }
        }
    }

}
