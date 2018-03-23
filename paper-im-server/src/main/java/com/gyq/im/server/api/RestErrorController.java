package com.gyq.im.server.api;

import com.gyq.im.common.exception.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;


/**
 * 处理error请求.
 *
 * @author gaoyaqiu
 */
@RestController
public class RestErrorController implements ErrorController {

    private static final String PATH = "/error";

    @Autowired
    private ErrorAttributes errorAttributes;

    @RequestMapping(value = PATH)
    public CommonResponse handleError(HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> errorAttributes = getErrorAttributes(request, true);
        return new CommonResponse(String.valueOf(response.getStatus()), (String) errorAttributes.get("error"));
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }

    private Map<String, Object> getErrorAttributes(HttpServletRequest request, boolean includeStackTrace) {
        WebRequest webRequest = new ServletWebRequest(request);
        return errorAttributes.getErrorAttributes(webRequest, includeStackTrace);
    }
}
