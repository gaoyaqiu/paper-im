package com.gyq.im.server.interceptor;

import com.google.common.base.Strings;
import com.gyq.im.common.context.ExecuteContext;
import com.gyq.im.common.tools.utils.UUIDGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * web请求拦截器.
 *
 * @auther gaoyaqiu
 */
@Slf4j
public class WebHandlerInterceptor extends HandlerInterceptorAdapter {

    /**
     * This implementation always returns {@code true}.
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        log.debug("WebHandlerInterceptor preHandle");

        String requestId = request.getHeader("request_id");
        if(Strings.isNullOrEmpty(requestId)) {
            // 生成请求id，便于查询调用链
            requestId = UUIDGenerator.generate();
        }

        ExecuteContext.initRequestId(requestId);
        return true;
    }

    /**
     * This implementation is empty.
     */
    @Override
    public void postHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
            throws Exception {
        log.debug("WebHandlerInterceptor postHandle");
    }

    /**
     * This implementation is empty.
     */
    @Override
    public void afterCompletion(
            HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        log.debug("WebHandlerInterceptor afterCompletion");
        ExecuteContext.removeContext();
    }

    /**
     * This implementation is empty.
     */
    @Override
    public void afterConcurrentHandlingStarted(
            HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.debug("WebHandlerInterceptor afterConcurrentHandlingStarted");
        ExecuteContext.removeContext();
    }

}
