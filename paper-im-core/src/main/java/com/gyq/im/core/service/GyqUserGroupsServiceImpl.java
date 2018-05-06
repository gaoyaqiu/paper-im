package com.gyq.im.core.service;

import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.tools.utils.DateUtil;
import com.gyq.im.common.tools.utils.KeyGeneratorUtil;
import com.gyq.im.core.entity.GyqUserGroups;
import com.gyq.im.core.mapper.GyqUserGroupsMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service("gyqUserGroupsService")
public class GyqUserGroupsServiceImpl extends BaseService<GyqUserGroups, GyqUserGroupsMapper> implements IGyqUserGroupsService {
    private GyqUserGroupsMapper mapper;

    @Autowired
    public void setMapper(GyqUserGroupsMapper mapper) {
        super.mapper = mapper;
        this.mapper = mapper;
    }

    @Override
    public GyqUserGroups addBasic(GyqUserGroups obj) {
        logger.debug("新增开始: {}", "");
        obj.setUgId(KeyGeneratorUtil.getKey());
        obj.setUgStatus(GlobalEnums.Status.NEW.getValue());
        obj.setUgCreated(DateUtil.getCurrentTimeMills());
        int n = mapper.insertSelective(obj);
		if(n != 1) {
			logger.error("新增失败: {}", "");
		}
        
        logger.debug("新增结束: {}", "");
        return obj;
    }

    @Override
    public GyqUserGroups modifyBasic(GyqUserGroups record) {
        logger.debug("修改开始: {}", "");
        int n = mapper.updateByPrimaryKeySelective(record);
		if(n != 1) {
			logger.error("修改失败: {}", "");
		}
        
        logger.debug("修改结束: {}", "");
        return record;
    }

    @Override
    public GyqUserGroups delBasic(long key) {
        logger.debug("删除开始: {}", "");
        int n = mapper.updateByPrimaryKeySelective(null);
		if(n != 1) {
			logger.error("删除失败: {}", "");
		}
        
        logger.debug("删除结束: {}", "");
        return null;
    }

    @Override
    public int addBatch(List<GyqUserGroups> record) {
        logger.debug("批量新增开始: {}", "");
        int n = mapper.insertBatch(record);
		if(n == 0) {
			logger.error("批量新增失败: {}", "");
		}
        
        logger.debug("批量新增结束: {}", "");
        return n;
    }
}