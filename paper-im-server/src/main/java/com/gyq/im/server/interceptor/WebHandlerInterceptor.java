package com.gyq.im.server.interceptor;

import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.model.ResponseEntity;
import com.gyq.im.common.tools.utils.ResponseWriterUtil;
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

        // 当出现404、500错误直接返回错误信息
        if (response.getStatus() == 500) {
            log.error("系统发生 500 错误");
            ResponseWriterUtil.json(response, new ResponseEntity<>(ApiCodeDefined.ERROR));
            return false;
        } else if (response.getStatus() == 404) {
            log.error("系统发生 404 错误");
            ResponseWriterUtil.json(response, new ResponseEntity<>(ApiCodeDefined.URL_NOT_FOUND));
            return false;
        }

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
    }

    /**
     * This implementation is empty.
     */
    @Override
    public void afterConcurrentHandlingStarted(
            HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.debug("WebHandlerInterceptor afterConcurrentHandlingStarted");
    }

}
