package com.gyq.im.server.core.service;

import com.gyq.im.common.models.Order;
import com.gyq.im.common.tools.utils.ClearNullUtil;
import com.gyq.im.server.core.mapper.IBaseMapper;
import com.gyq.im.server.core.model.RollPage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 基类 Service 默认实现.
 *
 * @param <M> model 定义.
 * @param <T> mapper 定义.
 */
public abstract class BaseService<M extends Serializable, T extends IBaseMapper<M>>
        implements IBaseService<M, T> {
    /**
     * 数据库操作mapper, 每个子类应该自行设置对应mapper.
     */
    protected T mapper;

    protected Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * mapper 设置, 子类可重写.
     *
     * @param mapper
     */
    public void setMapper(T mapper) {
        this.mapper = mapper;
    }

    public abstract M addBasic(M obj) throws Exception;

    public abstract int addBatch(List<M> list) throws Exception;

    public abstract M modifyBasic(M obj) throws Exception;

    public abstract M delBasic(String obj) throws Exception;

    @Override
    public M findObjByKey(Object seq) throws Exception {

        return (M) mapper.selectByPrimaryKey(seq);
    }

    @Override
    public M findObj(Map<String, Object> params) throws Exception {

        ClearNullUtil.mapClear(params);
        return (M) mapper.selectByParams(params);
    }

    @Override
    public List<M> findListByParams(Map<String, Object> params, Order order) throws Exception {

        ClearNullUtil.mapClear(params);
        return mapper.selectListByParams(params, null, null, order == null ? null : order.toString());
    }

    @Override
    public Integer findCountByParams(Map<String, Object> params) {
        ClearNullUtil.mapClear(params);

        return mapper.selectCountByParams(params);
    }

    @Override
    public List<M> findListByParams(Map<String, Object> params, Order order, Integer maxRecord) throws Exception {

        ClearNullUtil.mapClear(params);
        return mapper.selectListByParams(params, 0, maxRecord, order == null ? null : order.toString());
    }

    @Override
    public RollPage<M> findListPageByParams(Map<String, Object> params, Order order, Integer pageNum, Integer pageSize) throws Exception {

        ClearNullUtil.mapClear(params);
        Integer recordSum = mapper.selectCountByParams(params);

        // 默认20条
        Integer pageSizeCustom = 20;
        RollPage rollPage = new RollPage();
        rollPage.setTotal(recordSum);
        rollPage.setPageSize((pageSize != null && pageSize > 0) ? pageSize : pageSizeCustom);
        rollPage.setPageNum((pageNum != null && pageNum > 0) ? pageNum : 1);

        Integer pageOffset = (rollPage.getPageNum() - 1) * rollPage.getPageSize();

        if (recordSum > 0) {
            rollPage.setList(mapper.selectListByParams(params, pageOffset, rollPage.getPageSize(), order == null ? null : order.toString()));
        } else {
            rollPage.setList(new ArrayList());
        }

        return rollPage;
    }
}
