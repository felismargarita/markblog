package com.felis.markblogserver.controller;

import com.felis.markblogserver.entity.ResResult;
import com.felis.markblogserver.entity.User;
import com.felis.markblogserver.service.IUserService;
import org.apache.shiro.authc.AuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/user")
public class UserController extends BaseController {

    @Autowired
    private IUserService userService;

    @PostMapping("/login")
    public ResResult login(@RequestBody User user){
        try {
            userService.login(user);
            return success("登陆成功");
        }catch (Exception e){
            e.printStackTrace();
            return error("用户名密码错误");
        }
    }

    @PostMapping("/logout")
    public ResResult logout(){
        userService.logout();
        return success();
    }

    @PutMapping("/changePassword")
    public ResResult changePassword(String password){
        if(password.length()<9){
            return error("密码至少8位");
        }
        User user = userService.getUser(getUsername());
        user.setPassword(password.trim());
        userService.changePassword(user);
        return success();
    }
}
