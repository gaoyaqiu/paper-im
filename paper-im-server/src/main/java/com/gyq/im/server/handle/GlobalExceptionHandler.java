package com.gyq.im.server.handle;

import com.google.common.base.Strings;
import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.exception.CommonBadRequestException;
import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.common.exception.CommonResourceNotFoundException;
import com.gyq.im.common.exception.CommonResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionTimedOutException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.nio.file.AccessDeniedException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.core.annotation.AnnotatedElementUtils.findMergedAnnotation;
import static org.springframework.http.HttpStatus.*;

/**
 * 全局统一异常处理.
 *
 * @auther gaoyaqiu
 */
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler()
    @ResponseBody
    public ResponseEntity<CommonResponse> handleException(Exception ex) {
        HttpStatus httpStatus = resolveAnnotatedResponseStatus(ex);
        String message = ex.getMessage();
        if (message == null) {
            message = "系统错误.";
        }

        log.error("未知系统异常: [{}]", message, ex);

        // 不暴露真实错误信息
        return new ResponseEntity(CommonResponse.newBuilder().code(ApiCodeDefined.ERROR.getValue()).msg(ApiCodeDefined.ERROR.getDesc()).build(), new HttpHeaders(), httpStatus);
    }

    @ExceptionHandler({CommonInternalErrorException.class})
    public ResponseEntity<CommonResponse> handleInternalErrorException(CommonInternalErrorException ex) {
        return new ResponseEntity(CommonResponse.newBuilder().code(ex.getCode()).msg(ex.getMessage()).build(), new HttpHeaders(), INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({CommonBadRequestException.class})
    public ResponseEntity<CommonResponse> handleBadRequestException(CommonBadRequestException ex) {
        return new ResponseEntity(CommonResponse.newBuilder().code(ex.getCode()).msg(ex.getMessage()).build(), new HttpHeaders(), BAD_REQUEST);
    }

    @ExceptionHandler({CommonResourceNotFoundException.class})
    public ResponseEntity<CommonResponse> handleResourceNotFoundException(CommonResourceNotFoundException ex) {
        return new ResponseEntity(CommonResponse.newBuilder().code(ex.getCode()).msg(ex.getMessage()).build(), new HttpHeaders(), NOT_FOUND);
    }


    /**
     * 处理拒绝访问异常.
     *
     * @param ex
     * @return
     */
    @ExceptionHandler({AccessDeniedException.class})
    public ResponseEntity<CommonResponse> handleAccessDeniedException(Exception ex) {
        return new ResponseEntity(CommonResponse.newBuilder().code(FORBIDDEN.toString()).msg(ex.getMessage()).build(), new HttpHeaders(), FORBIDDEN);
    }

    /**
     * 处理Bean validation 参数异常.
     *
     * @param e
     * @return
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CommonResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        List<Map<String, String>> resErrorList = new ArrayList<>();
        List<FieldError> fieldErrorList = e.getBindingResult().getFieldErrors();
        for (FieldError fieldError : fieldErrorList) {
            Map<String, String> fieldMap = new HashMap<>();

            fieldMap.put("field", fieldError.getField());
            fieldMap.put("message", fieldError.getDefaultMessage());

            String value = String.valueOf(fieldError.getRejectedValue());
            if(!Strings.isNullOrEmpty(value)){
                fieldMap.put("value", value);
            }

            resErrorList.add(fieldMap);
        }

        return new ResponseEntity(CommonResponse.newBuilder().code(ApiCodeDefined.ERROR_PARAMETER.getValue()).msg(ApiCodeDefined.ERROR_PARAMETER.getDesc()).data(resErrorList).build(), new HttpHeaders(), BAD_REQUEST);
    }

    /**
     * 处理事务请求超时异常.
     *
     * @return
     */
    @ExceptionHandler(TransactionTimedOutException.class)
    public ResponseEntity<CommonResponse> handleTransactionTimeOutException() {
        return new ResponseEntity(CommonResponse.newBuilder().code(ApiCodeDefined.ERROR_REQUEST_TIMEOUT.getValue()).msg(ApiCodeDefined.ERROR_REQUEST_TIMEOUT.getDesc()).build(), new HttpHeaders(), INTERNAL_SERVER_ERROR);
    }

    private HttpStatus resolveAnnotatedResponseStatus(Exception exception) {
        log.error(exception.getMessage());

        ResponseStatus annotation = findMergedAnnotation(exception.getClass(), ResponseStatus.class);
        if (annotation != null) {
            return annotation.value();
        }

        return INTERNAL_SERVER_ERROR;
    }
}
