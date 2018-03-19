package com.gyq.im.server.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * 数据源配置.
 *
 * @auther gaoyaqiu
 * @date 2018/3/19
 */
@Configuration
@ConditionalOnProperty("db.config")
@EnableTransactionManagement
@PropertySource("classpath:${db.config}")
@MapperScan(basePackages = "com.gyq.im.server.core.mapper", sqlSessionFactoryRef = "sqlSessionFactory")
public class DataSourceConfig {

    @Bean(name = "dataSource")
    public DataSource dataSource() {
        DruidDataSource dds = new DruidDataSource();

        dds.setUrl(env.getProperty("mysql.url"));
        dds.setUsername(env.getProperty("mysql.username"));
        dds.setPassword(env.getProperty("mysql.password"));
        int maxActive = Integer.parseInt(env.getProperty("mysql.maxActive"));
        dds.setMaxActive(maxActive);

        int initialSize = Integer.parseInt(env.getProperty("mysql.initialSize"));
        // 初始化连接数
        dds.setInitialSize(initialSize);
        // 最小连接数
        dds.setMinIdle(initialSize);
        // 获取连接等待超时时间
        dds.setMaxWait(60000L);
        dds.setValidationQuery("SELECT 1");
        // 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能
        dds.setTestOnBorrow(true);
        // 归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能
        dds.setTestOnReturn(true);
        // 申请连接的时候检测，如果空闲时间大于 timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效。
        dds.setTestWhileIdle(true);
        // 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒
        dds.setTimeBetweenEvictionRunsMillis(86400000L);
        // 配置一个连接在池中最小生存的时间，单位是毫秒
        dds.setMinEvictableIdleTimeMillis(360000L);
        // 打开后会影响性能，只有在排查连接泄露的时候，才打开
      //  dds.setRemoveAbandoned(true);
        dds.setRemoveAbandonedTimeout(60);
        dds.setLogAbandoned(true);

        // 打开PSCache，并且指定每个连接上PSCache的大小
        dds.setPoolPreparedStatements(true);
        dds.setMaxOpenPreparedStatements(maxActive);

        return dds;
    }

    @Bean("transactionManager")
    public DataSourceTransactionManager transactionManager(@Qualifier("dataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean("sqlSessionFactory")
    public SqlSessionFactory ucSqlSessionFactory(@Qualifier("dataSource") DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mapper/*Mapper.xml"));
        return sessionFactory.getObject();
    }

    @Autowired
    private Environment env;
}
