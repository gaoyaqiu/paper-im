package com.gyq.im.common.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;

import javax.servlet.ServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Slf4j
public class ResponseWriterUtil {

    public static void json(ServletResponse response, Object data) {
        response.setCharacterEncoding("UTF-8");
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);

        try(PrintWriter writer = response.getWriter()) {
            writer.print(JsonUtil.object2Json(data));
        } catch (IOException e) {
            log.error("response error", e);
        }
    }
}
