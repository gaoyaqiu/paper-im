package com.gyq.im.core.service;

import com.gyq.im.common.models.Order;
import com.gyq.im.core.mapper.IBaseMapper;
import com.gyq.im.core.model.RollPage;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * 基础dao接口.
 *
 * @author gaoyaqiu
 */
public interface IBaseService<M extends Serializable, T extends IBaseMapper<M>> {
    /**
     * 增加记录
     *
     * @param obj
     * @throws Exception
     * @author three
     */
    @Transactional
    M addBasic(M obj) throws Exception;

    /**
     * 批量新增
     * @param list
     * @return
     */
    @Transactional
    int addBatch(List<M> list) throws Exception;

    /**
     * 修改记录
     *
     * @param obj
     * @throws Exception
     * @author three
     */
    @Transactional
    M modifyBasic(M obj) throws Exception;

    /**
     * 删除记录
     *
     * @param obj
     * @throws Exception
     * @author three
     */
    @Transactional
    M delBasic(String obj) throws Exception;

    /**
     * 根据主键查询记录
     *
     * @param seq
     * @return
     * @throws Exception
     * @author three
     */
    @Transactional(readOnly = true)
    M findObjByKey(Object seq) throws Exception;

    /**
     * 根据条件查询记录
     *
     * @param params
     * @return
     * @throws Exception
     * @author three
     */
    @Transactional(readOnly = true)
    M findObj(Map<String, Object> params) throws Exception;

    /**
     * 根据条件查询列表
     *
     * @param params
     * @param order
     * @return
     * @throws Exception
     * @author three
     */
    @Transactional(readOnly = true)
    List<M> findListByParams(Map<String, Object> params, Order order) throws Exception;

    /**
     * 根据条件查询列表
     *
     * @param params
     * @param order
     * @param maxRecord
     * @return
     * @throws Exception
     */
    @Transactional(readOnly = true)
    List<M> findListByParams(Map<String, Object> params, Order order, Integer maxRecord) throws Exception;

    /**
     * 根据条件查询 ，返回记录总数
     *
     * @param params
     * @return
     */
    @Transactional(readOnly = true)
    Integer findCountByParams(Map<String, Object> params) throws Exception;

    /**
     * 根据条件查询 列表（分页查询）
     *
     * @param params
     * @param order
     * @param pageNum
     * @param pageSize
     * @return
     * @throws Exception
     * @author three
     */
    @Transactional(readOnly = true)
    RollPage<M> findListPageByParams(Map<String, Object> params, Order order, Integer pageNum, Integer pageSize) throws Exception;
}
