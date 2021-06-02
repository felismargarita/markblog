package com.felis.markblogserver.validation.custom.impl;


import com.felis.markblogserver.validation.custom.StringLength;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class StringLengthValidator implements ConstraintValidator<StringLength,String> {

    private int min;
    private int max;
    private boolean allowNull;

    @Override
    public void initialize(StringLength constraintAnnotation) {
        this.min = constraintAnnotation.min();
        this.max = constraintAnnotation.max();
        this.allowNull = constraintAnnotation.allowNull();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {

        if(value == null){
           return allowNull;
        }
        int length = value.length();
        return length>=min && length <= max;
    }


}
