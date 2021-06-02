package com.felis.markblogserver.validation.custom;


import com.felis.markblogserver.validation.custom.impl.StringLengthValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.FIELD,ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = {StringLengthValidator.class})
public @interface StringLength {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int min() default 0;

    int max() default 2147483647;

    boolean allowNull() default false;

    @Target({ElementType.METHOD, ElementType.FIELD,ElementType.PARAMETER})
    @Retention(RetentionPolicy.RUNTIME)
    @Documented
    public @interface List {
        StringLength[] value();
    }
}
