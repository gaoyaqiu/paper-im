package com.gyq.im.server.api;

import com.gyq.im.common.context.ExecuteContext;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * api业务基类.
 *
 * @author gaoyaqiu
 */
@RequestMapping(AbstractBizBaseApi.REST_URL_PREFIX)
public abstract class AbstractBizBaseApi {

    protected static final String REST_URL_PREFIX = "/" + ExecuteContext.BIZ_BASE_API_PREFIX + "/";
}
