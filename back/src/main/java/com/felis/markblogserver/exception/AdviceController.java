package com.felis.markblogserver.exception;

import com.felis.markblogserver.controller.BaseController;
import com.felis.markblogserver.entity.ResResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AdviceController extends BaseController {


    @ExceptionHandler(RuntimeException.class)
    public ResResult RuntimeExceptionHandler(RuntimeException runtimeException){
        runtimeException.printStackTrace();
        return error(runtimeException.getMessage());
    }
}
