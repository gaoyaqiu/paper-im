package com.gyq.im.server.controller;

import com.gyq.im.common.context.ExecuteContext;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 系统api请求标识.
 *
 * @author gaoyaqiu
 */
@RequestMapping(AbstractSystemApi.REST_URL_PREFIX)
public abstract class AbstractSystemApi {

    protected static final String REST_URL_PREFIX = "/" + ExecuteContext.SYSTEM_API_PREFIX + "/";
}
