package com.gyq.im.server.handle;

import com.gyq.im.common.exception.CommonResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.core.annotation.AnnotatedElementUtils.findMergedAnnotation;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

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
    public CommonResponse<?> handleException(Exception ex) {
        HttpStatus httpStatus = resolveAnnotatedResponseStatus(ex);
        String message = ex.getMessage();
        if (message == null) {
            message = "系统错误.";
        }
        log.error(message, ex);

        return new CommonResponse<>(ex);
    }


    /**
     * 处理拒绝访问异常.
     *
     * @param ex
     * @return
     */
  /*  @ExceptionHandler({AccessDeniedException.class})
    public CommonResponse<?> handleAccessDeniedException(Exception ex) {
        CommonResponse errorResponse = of(FORBIDDEN.value(), ex.getMessage());
        return new CommonResponse<>(errorResponse, new HttpHeaders(), FORBIDDEN);
    }*/

    /**
     * 处理Bean validation异常.
     *
     * @param e
     * @return
     */
   /* @ExceptionHandler(MethodArgumentNotValidException.class)
    public CommonResponse<CommonResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        String errorMessage = e.getBindingResult().getFieldErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.joining("|"));
        CommonResponse response = of(BAD_REQUEST.value(), errorMessage);
        return new CommonResponse<>(response, new HttpHeaders(), BAD_REQUEST);
    }*/

    /**
     * 处理请求超时异常.
     *
     * @return
     */
  /*  @ExceptionHandler(TransactionTimedOutException.class)
    public CommonResponse<CommonResponse> handleTransactionTimeOutException() {
        CommonResponse errorResponse = of(INTERNAL_SERVER_ERROR.value(), "请求超时，请重试");
        return new CommonResponse<>(errorResponse, new HttpHeaders(), INTERNAL_SERVER_ERROR);
    }*/

    private HttpStatus resolveAnnotatedResponseStatus(Exception exception) {
        log.error(exception.getMessage());

        ResponseStatus annotation = findMergedAnnotation(exception.getClass(), ResponseStatus.class);
        if (annotation != null) {
            return annotation.value();
        }

        return INTERNAL_SERVER_ERROR;
    }
}
