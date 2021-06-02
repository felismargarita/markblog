package com.felis.markblogserver.validation.custom.impl;


import com.felis.markblogserver.validation.custom.LessThan;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;


public class LessThanValidator implements ConstraintValidator<LessThan,Double> {

    private Double max;

    @Override
    public void initialize(LessThan constraintAnnotation) {
        this.max = constraintAnnotation.value();
    }

    @Override
    public boolean isValid(Double aDouble, ConstraintValidatorContext constraintValidatorContext) {

        return aDouble < max;
    }
}
