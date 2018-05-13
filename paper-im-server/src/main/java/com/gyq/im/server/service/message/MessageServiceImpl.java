package com.gyq.im.server.service.message;

import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.common.tools.utils.BeanCopierUtils;
import com.gyq.im.core.entity.GyqMessage;
import com.gyq.im.core.service.IGyqMessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author gaoyaqiu
 * @date 2018/5/13
 */
@Slf4j
@Service
public class MessageServiceImpl implements IMessageService {

    @Autowired
    private IGyqMessageService gyqMessageService;

    @Override
    public Message sendP2PMsg(GyqMessage gyqMessage) {

        Message message = new Message();
        try {
            gyqMessageService.addBasic(gyqMessage);
        } catch (Exception e) {
            log.error("新增消息异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        BeanCopierUtils.copyProperties(gyqMessage, message);
        return message;
    }
}
