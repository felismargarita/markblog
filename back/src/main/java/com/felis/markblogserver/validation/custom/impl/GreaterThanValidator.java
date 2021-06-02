package com.felis.markblogserver.validation.custom.impl;

import com.felis.markblogserver.validation.custom.GreaterThan;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class GreaterThanValidator implements ConstraintValidator<GreaterThan,Double> {

    private Double min;

    @Override
    public void initialize(GreaterThan constraintAnnotation) {
        this.min = constraintAnnotation.value();
    }

    @Override
    public boolean isValid(Double aDouble, ConstraintValidatorContext constraintValidatorContext) {

        if (aDouble == null){
            aDouble = new Double(0);
        }

        return aDouble > min;
    }
}
