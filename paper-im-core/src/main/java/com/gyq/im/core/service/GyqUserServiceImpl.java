package com.gyq.im.core.service;

import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.tools.utils.DateUtil;
import com.gyq.im.common.tools.utils.KeyGeneratorUtil;
import com.gyq.im.common.tools.utils.RandomUtil;
import com.gyq.im.core.entity.GyqUser;
import com.gyq.im.core.mapper.GyqUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("gyqUserService")
public class GyqUserServiceImpl extends BaseService<GyqUser, GyqUserMapper> implements IGyqUserService {
    private GyqUserMapper mapper;

    @Autowired
    public void setMapper(GyqUserMapper mapper) {
        super.mapper = mapper;
        this.mapper = mapper;
    }

    @Override
    public GyqUser addBasic(GyqUser obj) {
        logger.debug("新增开始");
        obj.setUserUid(KeyGeneratorUtil.getKey());
        obj.setUserStatus(GlobalEnums.Status.NEW.getValue());
        obj.setUserCreated(DateUtil.getCurrentTimeMills());
        int n = mapper.insertSelective(obj);
        if(n != 1) {
            logger.error("新增失败");
        }

        logger.debug("新增结束");
        return obj;
    }

    @Override
    public GyqUser modifyBasic(GyqUser record) {
        logger.debug("修改开始");
        record.setUserStatus(GlobalEnums.Status.UPDATED.getValue());
        record.setUserUpdated(DateUtil.getCurrentTimeMills());
        int n = mapper.updateByPrimaryKeySelective(record);
		if(n != 1) {
			logger.error("修改失败");
		}
        
        logger.debug("修改结束");
        return record;
    }

    @Override
    public GyqUser delBasic(long key) {
        logger.debug("删除开始");
        GyqUser obj = new GyqUser();
        obj.setUserUid(key);
        obj.setUserStatus(GlobalEnums.Status.DELETED.getValue());
        obj.setUserDeleted(DateUtil.getCurrentTimeMills());

        int n = mapper.updateByPrimaryKeySelective(obj);
		if(n != 1) {
			logger.error("删除失败");
		}
        
        logger.debug("删除结束");
        return null;
    }

    @Override
    public int addBatch(List<GyqUser> record) {
        logger.debug("批量新增开始");
        int n = mapper.insertBatch(record);
		if(n == 0) {
			logger.error("批量新增失败");
		}
        
        logger.debug("批量新增结束");
        return n;
    }

    @Override
    public List<GyqUser> findFriends(Map<String, Object> params) {
        return mapper.selectListByUid(params);
    }
}