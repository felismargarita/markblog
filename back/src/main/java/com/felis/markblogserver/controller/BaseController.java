package com.felis.markblogserver.controller;

import com.felis.markblogserver.constants.Constants;
import com.felis.markblogserver.entity.ResResult;
import org.apache.shiro.SecurityUtils;

public class BaseController {

    protected ResResult success(){
        return new ResResult(Constants.SUCCESS_CODE,"success",null);
    }
    protected ResResult success(Object info){
        ResResult resResult = success();
        resResult.setInfo(info);
        return resResult;
    }

    protected ResResult error(){
        return new ResResult(Constants.ERROR_CODE,"ERROR",null);
    }

    protected ResResult error(String message){
        ResResult resResult = error();
        resResult.setMsg(message);
        return resResult;
    }

    protected String getUsername(){
        return SecurityUtils.getSubject().getPrincipal().toString();
    }


}
