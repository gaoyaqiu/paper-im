package com.gyq.im.server.security.management;

import com.gyq.im.server.security.jwt.JwtAuthenticationEntryPoint;
import com.gyq.im.server.security.jwt.JwtAuthenticationFilter;
import com.gyq.im.server.security.jwt.JwtUserPasswordLoginFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@Order(100)
public class ManagementWebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private ManagementLoginAuthenticationProvider loginAuthenticationProvider;

    @Autowired
    private ManagementJwtAuthenticationProvider jwtAuthenticationProvider;

    @Autowired
    private JwtAuthenticationEntryPoint authenticationEntryPoint;

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(loginAuthenticationProvider);
        auth.authenticationProvider(jwtAuthenticationProvider);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/b/user/add", "/static/*", "/server/*", "/api-ui.html", "/swagger-ui/**", "/v2/api-docs");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 禁用csrf
        http.csrf().disable()
                .antMatcher("/**")
                .authorizeRequests().anyRequest().authenticated()
                .and()
                // 在UsernamePasswordAuthenticationFilter之前添加JwtUserPasswordLoginFilter过滤器
                .addFilterBefore(new JwtUserPasswordLoginFilter("/b/user/login", this.authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JwtAuthenticationFilter(this.authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                // 配置验证策略
                .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                // 使用自定义的session策略
                .sessionManagement()
                // 调整为让Spring Security不创建和使用session
                .sessionCreationPolicy(STATELESS);
    }

}
