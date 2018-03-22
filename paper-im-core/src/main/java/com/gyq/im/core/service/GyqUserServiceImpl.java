package com.gyq.im.core.service;

import com.gyq.im.core.mapper.GyqUserMapper;
import com.gyq.im.core.model.GyqUser;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service("gyqUserService")
public class GyqUserServiceImpl extends BaseService<GyqUser, GyqUserMapper> implements IGyqUserService {
    private GyqUserMapper mapper;

    @Autowired
    public void setMapper(GyqUserMapper mapper) {
        super.mapper = mapper;
        this.mapper = mapper;
    }

    @Override
    public GyqUser addBasic(GyqUser record) {
        logger.debug("新增开始: {}", "");
        int n = mapper.insertSelective(record);
		if(n != 1) {
			logger.error("新增失败: {}", "");
		}
        
        logger.debug("新增结束: {}", "");
        return record;
    }

    @Override
    public GyqUser modifyBasic(GyqUser record) {
        logger.debug("修改开始: {}", "");
        int n = mapper.updateByPrimaryKeySelective(record);
		if(n != 1) {
			logger.error("修改失败: {}", "");
		}
        
        logger.debug("修改结束: {}", "");
        return record;
    }

    @Override
    public GyqUser delBasic(String key) {
        logger.debug("删除开始: {}", "");
        int n = mapper.updateByPrimaryKeySelective(null);
		if(n != 1) {
			logger.error("删除失败: {}", "");
		}
        
        logger.debug("删除结束: {}", "");
        return null;
    }

    @Override
    public int addBatch(List<GyqUser> record) {
        logger.debug("批量新增开始: {}", "");
        int n = mapper.insertBatch(record);
		if(n == 0) {
			logger.error("批量新增失败: {}", "");
		}
        
        logger.debug("批量新增结束: {}", "");
        return n;
    }
}