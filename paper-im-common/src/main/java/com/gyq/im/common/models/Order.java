package com.gyq.im.common.models;

import com.gyq.im.common.tools.utils.ArrayUtil;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


/**
 * 请求基本参数
 *
 * @author gaoyaqiu
 */
public class Order implements Serializable{
    public Order(){}
    private static final int a2A = 'A'-'a';
    // 降序
    private static final String DESC = "desc";
    // 升序
    private static final String ASC = "asc";

    public String getColumn() {
        return column;
    }

    public void setColumn(String column) {
        this.column = column;
    }

    public String getOrderType() {
        return orderType;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    private Order(final String column, String orderType) {
        String order = ORDER_CACHE.get(column);
        if (order == null) {
            char[] cs = column.toCharArray();
            StringBuffer sb = new StringBuffer();
            for(char ch: cs) {
                if(ch>'A' && ch<'Z') {
                    sb.append('_').append(ch);
                } else {
                    sb.append((char) (ch + a2A));
                }
            }
            order = sb.toString();
            ORDER_CACHE.put(column, order);
        }

        this.column = order;
        this.orderType = orderType;
    }

    public static Order desc(String column) {
        Order order = new Order(column, DESC);
        return order;
    }

    public static Order asc(String column) {
        Order order = new Order(column, ASC);
        return order;
    }

    public String toString() {
        String orderColumn = this.column;
        StringBuffer sb = new StringBuffer();
        sb.append(orderColumn).append(" ").append(this.orderType);

        return sb.toString();
    }

    private static Map<String, String> ORDER_CACHE = new LinkedHashMap<String, String>();
    private String column;
    private String orderType;

    private static final long serialVersionUID = 1L;


    /**
     * 获取请求的排序参数
     * @param orders 排序字段列表
     * @return
     */
    public static Order getOrderParam(List<Order> orders){
        Order o = null;
        if(!ArrayUtil.isNullOrEmpty(orders)){
            for(Order order : orders){
                // 降序
                if(order.getOrderType().equalsIgnoreCase(DESC)){
                    o = desc(order.getColumn());
                }else{
                    o = asc(order.getColumn());
                }
                break;
            }
        }
        return o;
    }
}
