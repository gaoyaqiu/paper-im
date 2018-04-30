package com.gyq.im.swagger;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import static com.google.common.collect.Lists.newArrayList;

@Configuration
@ConditionalOnProperty(name = "swagger.enable", havingValue = "true")
@EnableSwagger2
@Import({springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration.class,
        springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration.class})
public class Swagger2AutoConfig {

    @Bean
    public Docket petApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.gyq.im.server.controller"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo())
                // 添加公共参数
                .globalOperationParameters(
                        newArrayList(
                                new ParameterBuilder()
                                        .name("Authorization")
                                        .description("token")
                                        .modelRef(new ModelRef("string"))
                                        .parameterType("header")
                                        .required(true)
                                        .build()
                        )
                )
                .produces(getAllProduceContentTypes())
                .consumes(getAllConsumeContentTypes())
//                .tags(new Tag("Pet Service", "All apis relating to pets"))
//                .additionalModels(typeResolver.resolve(AdditionalModel.class))
                ;
    }

    private Set<String> getAllConsumeContentTypes() {
        Set<String> consumes = new HashSet<>();
        // Add other media types if required in future
        consumes.add(MediaType.APPLICATION_JSON_UTF8_VALUE);
        return consumes;
    }

    private Set<String> getAllProduceContentTypes() {
        Set<String> produces = new HashSet<>();
        // Add other media types if required in future
        produces.add(MediaType.APPLICATION_JSON_UTF8_VALUE);
        return produces;
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "基础服务 REST API",
                "Some custom description of API.",
                "v1.0.0",
                "",
                new Contact("高亚球", "", "gyq30494613@gmail.com"),
                "",
                "",
                new ArrayList<>());
    }
}
