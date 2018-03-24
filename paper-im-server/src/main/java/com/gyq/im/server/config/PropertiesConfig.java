package com.gyq.im.server.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 配置中心.
 *
 * @auther gaoyaqiu
 */
@Setter
@Getter
@Component
@ConfigurationProperties(prefix="im")
public class PropertiesConfig {

    // 过期时间(单位: 分钟)
    private long tokenExpire;

    // 签名key
    private String signatureKey;
}
