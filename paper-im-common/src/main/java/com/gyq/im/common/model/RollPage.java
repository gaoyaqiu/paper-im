package com.gyq.im.common.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serializable;
import java.util.List;

/**
 * 分页基础bean.
 *
 * @author gaoyaqiu
 */
@JsonSerialize(include= JsonSerialize.Inclusion.NON_NULL)
public class RollPage<T extends Serializable> implements Serializable{

    // 结果集
    private List<T> list;

    // 总记录数
    private Integer total;

    // 页大小
    private Integer pageSize;

    // 当前页
    private Integer pageNum;


    /**
     * 验证是否启用分页
     * @param pageNumber 当前页
     * @param pageSize   页大小
     * @return 0=pageNumber,1=pageSize
     */
    public static int[] isEnablePage(Integer pageNumber, Integer pageSize){
        int defaultPageSize = 1;
        int maxPageSize = 20;

        if(null != pageNumber){
            return getPageParams(pageNumber, pageSize, defaultPageSize, maxPageSize);
        } else {
            return getPageParams(1, pageSize, defaultPageSize, maxPageSize);
        }
    }

    private static int[] getPageParams(Integer pageNumber, Integer pageSize, int defaultPageSize, int maxPageSize) {

        int[] pageParams = new int[2];

        if(null == pageSize){
			pageSize = defaultPageSize;
		}else{
			if(pageSize > maxPageSize){
				// 限制最大返回条数
				pageSize = maxPageSize;
			}
		}

        pageParams[0] = pageNumber;
        pageParams[1] = pageSize;

        return pageParams;
    }


    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    private static final long serialVersionUID = 4241736510750597679L;


}
