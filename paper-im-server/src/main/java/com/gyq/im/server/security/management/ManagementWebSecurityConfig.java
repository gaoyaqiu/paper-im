package com.gyq.im.server.security.management;

import com.gyq.im.server.security.jwt.JwtAuthenticationEntryPoint;
import com.gyq.im.server.security.jwt.JwtAuthenticationFilter;
import com.gyq.im.server.security.jwt.JwtUserPasswordLoginFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@Order(SecurityProperties.DEFAULT_FILTER_ORDER)
public class ManagementWebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private ManagementLoginAuthenticationProvider loginAuthenticationProvider;

    @Autowired
    private ManagementJwtAuthenticationProvider jwtAuthenticationProvider;

    @Autowired
    private JwtAuthenticationEntryPoint authenticationEntryPoint;

    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(loginAuthenticationProvider);
        auth.authenticationProvider(jwtAuthenticationProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
                // 禁用Spring Security自带的跨域处理
                .disable()
                .antMatcher("/b/user/**")
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .addFilterBefore(new JwtUserPasswordLoginFilter("/b/user/login", this.authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JwtAuthenticationFilter(this.authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                // 使用自定义的session策略
                .sessionManagement()
                // 调整为让Spring Security不创建和使用session
                .sessionCreationPolicy(STATELESS);
    }

}
