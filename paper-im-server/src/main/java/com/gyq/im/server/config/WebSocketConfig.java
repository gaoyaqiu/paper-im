package com.gyq.im.server.config;

import com.gyq.im.server.handle.WebSocketHandler;
import com.gyq.im.server.interceptor.WebHandlerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * 拦截器配置.
 *
 * @auther gaoyaqiu
 * @date 2018/3/13
 */
@Configuration
@EnableWebMvc
@EnableWebSocket
public class WebSocketConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations(ResourceUtils.CLASSPATH_URL_PREFIX + "/static/");

        // Make Swagger meta-data available via <baseURL>/v2/api-docs/
        registry.addResourceHandler("/swagger-ui/**")
                .addResourceLocations("classpath:/META-INF/resources/swagger-ui/");
        // Make Swagger UI available via <baseURL>/apis.html
        registry.addResourceHandler("/api-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new WebHandlerInterceptor())
                // 拦截配置
                .addPathPatterns("/**")
                // 排除配置
                .excludePathPatterns("/api", "/api-ui.html", "/v2/api-docs", "/swagger-ui/**");
    }

    @Bean
    public WebSocketHandler webSocketHandler() {
        return new WebSocketHandler();
    }

    /**
     * 使用springboot内置容器undertow.
     *
     * @return
     */
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
