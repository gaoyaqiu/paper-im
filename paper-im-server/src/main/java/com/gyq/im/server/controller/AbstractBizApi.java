package com.gyq.im.server.controller;

import com.gyq.im.common.context.ExecuteContext;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 业务api请求标识.
 *
 * @author gaoyaqiu
 */
@RequestMapping(AbstractBizApi.REST_URL_PREFIX)
public abstract class AbstractBizApi {

    protected static final String REST_URL_PREFIX = "/" + ExecuteContext.BIZ_BASE_API_PREFIX + "/";
}
