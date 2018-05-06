package com.gyq.im.core.service;

import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.tools.utils.DateUtil;
import com.gyq.im.common.tools.utils.KeyGeneratorUtil;
import com.gyq.im.core.entity.GyqFriends;
import com.gyq.im.core.mapper.GyqFriendsMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service("gyqFriendsService")
public class GyqFriendsServiceImpl extends BaseService<GyqFriends, GyqFriendsMapper> implements IGyqFriendsService {
    private GyqFriendsMapper mapper;

    @Autowired
    public void setMapper(GyqFriendsMapper mapper) {
        super.mapper = mapper;
        this.mapper = mapper;
    }

    @Override
    public GyqFriends addBasic(GyqFriends obj) {
        logger.debug("新增开始");
        obj.setfId(KeyGeneratorUtil.getKey());
        obj.setfStatus(GlobalEnums.Status.NEW.getValue());
        obj.setfCreated(DateUtil.getCurrentTimeMills());
        int n = mapper.insertSelective(obj);
		if(n != 1) {
			logger.error("新增失败");
		}
        
        logger.debug("新增结束");
        return obj;
    }

    @Override
    public GyqFriends modifyBasic(GyqFriends record) {
        logger.debug("修改开始: {}", "");
        int n = mapper.updateByPrimaryKeySelective(record);
		if(n != 1) {
			logger.error("修改失败: {}", "");
		}
        
        logger.debug("修改结束: {}", "");
        return record;
    }

    @Override
    public GyqFriends delBasic(long key) {
        logger.debug("删除开始: {}", "");
        int n = mapper.updateByPrimaryKeySelective(null);
		if(n != 1) {
			logger.error("删除失败: {}", "");
		}
        
        logger.debug("删除结束: {}", "");
        return null;
    }

    @Override
    public int addBatch(List<GyqFriends> record) {
        logger.debug("批量新增开始: {}", "");
        int n = mapper.insertBatch(record);
		if(n == 0) {
			logger.error("批量新增失败: {}", "");
		}
        
        logger.debug("批量新增结束: {}", "");
        return n;
    }
}