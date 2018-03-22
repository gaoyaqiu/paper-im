package com.gyq.im.server.handle;


import com.google.common.base.Strings;
import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.exception.ApiException;
import com.gyq.im.common.exception.BaseException;
import com.gyq.im.common.models.ResponseEntity;
import com.gyq.im.common.models.wrapper.ResponseFactory;
import com.gyq.im.common.tools.utils.JsonUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 全局统一异常处理.
 *
 * @auther gaoyaqiu
 */
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 自定义异常处理.
     *
     * @param ex
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = BaseException.class)
    @ResponseBody
    public ResponseEntity baseExceptionHandler(BaseException ex) throws Exception {
        return ResponseFactory.<String>wrapper(ex);
    }

    /**
     * 404 异常处理.
     *
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = NoHandlerFoundException.class)
    @ResponseBody
    public ResponseEntity noHandlerExceptionHandler() throws Exception {
        return ResponseFactory.<String>wrapper(ApiCodeDefined.URL_NOT_FOUND);
    }

    /**
     * 未知异常处理.
     *
     * @param ex
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public ResponseEntity exceptionHandler(Exception ex) throws Exception {
        ResponseEntity res = otherExceptionHandle(ex);
        if (res == null) {
            log.error("未知异常:", ex);
            res = ResponseFactory.<String>wrapper(ApiCodeDefined.ERROR);
        }

        return res;
    }

    /**
     * 处理其它异常
     *
     * @param ex
     * @return
     */
    public ResponseEntity otherExceptionHandle(Exception ex) {
        if (ex instanceof MissingServletRequestParameterException) {
            log.error("缺少必填参数:", ex);
            return ResponseFactory.<String>wrapper(ApiCodeDefined.ERROR_MISSING_PARAMETER);
        }
        return null;
    }

    /**
     * 请求参数语法错误.
     *
     * @param ex
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = HttpMessageNotReadableException.class)
    @ResponseBody
    public ResponseEntity httpMessageNotReadableExceptionHandler(Exception ex) throws Exception {
        log.error("json语法错误异常:", ex);
        return ResponseFactory.<String>wrapper(ApiCodeDefined.ERROR_SYNTAX);
    }

    /**
     * api系统异常处理.
     *
     * @param ex
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = ApiException.class)
    @ResponseBody
    public ResponseEntity CommentExceptionHandler(ApiException ex) throws Exception {
        log.error("api系统异常:", ex);

        return ResponseFactory.wrapper(ex);
    }

    /**
     * 参数验证异常处理.
     *
     * @param ex
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = {MethodArgumentNotValidException.class, BindException.class})
    @ResponseBody
    public ResponseEntity<List<Map<String, String>>> parameterExceptionHandler(Exception ex) throws IOException {
        List<Map<String, String>> resErrors = new ArrayList<>();
        List<ObjectError> errors = null;
        if (ex instanceof MethodArgumentNotValidException) {
            errors = ((MethodArgumentNotValidException) ex).getBindingResult().getAllErrors();
        } else if (ex instanceof BindException) {
            errors = ((BindException) ex).getBindingResult().getAllErrors();
        }

        for (ObjectError error : errors) {
            Map<String, String> result = new HashMap<>();
            result.put("message", "未知的参数错误");

            if (error instanceof FieldError) {
                FieldError fieldError = (FieldError) error;
                String messageFormat = fieldError.getDefaultMessage();
                String errorMessage = formatValidMessage(messageFormat);

                result.put("field", fieldError.getField());
                result.put("message", errorMessage);

                String value = String.valueOf(fieldError.getRejectedValue());
                if (!Strings.isNullOrEmpty(value)) {
                    result.put("value", value);
                }
            } else {
                result.put("message", error.getDefaultMessage());
            }
            resErrors.add(result);
        }

        log.error("===返回结果：{}===", JsonUtil.object2Json(resErrors));
        return ResponseFactory.wrapper(resErrors, ApiCodeDefined.ERROR_PARAMETER);
    }

    private String formatValidMessage(String format) {

        return format;
    }
}
