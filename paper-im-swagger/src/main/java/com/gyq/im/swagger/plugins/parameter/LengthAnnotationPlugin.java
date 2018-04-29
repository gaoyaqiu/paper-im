package com.gyq.im.swagger.plugins.parameter;

import com.google.common.base.Optional;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.validator.constraints.Length;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import springfox.bean.validators.plugins.Validators;
import springfox.documentation.service.AllowableRangeValues;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.ParameterBuilderPlugin;
import springfox.documentation.spi.service.contexts.ParameterContext;

import static com.gyq.im.swagger.plugins.RangeAnnotations.stringLengthRange;
import static springfox.bean.validators.plugins.Validators.annotationFromParameter;

@Slf4j
@Component
@Order(Validators.BEAN_VALIDATOR_PLUGIN_ORDER)
public class LengthAnnotationPlugin implements ParameterBuilderPlugin {

    @Override
    public boolean supports(DocumentationType delimiter) {
        return true;
    }

    @Override
    public void apply(ParameterContext context) {
        Optional<Length> length = annotationFromParameter(context, Length.class);
        log.debug("searching for @Length: {}", length.isPresent());
        if (length.isPresent()) {
            AllowableRangeValues values = stringLengthRange(length.get());
            log.debug("Adding allowable Values @Length: {} - {}", values.getMin(), values.getMax());
            context.parameterBuilder().allowableValues(values);

            context.parameterBuilder()
                    .description(
                            String.format("@Length: %s - %s",
                                    values.getMin(),
                                    values.getMax()));
        }
    }
}
