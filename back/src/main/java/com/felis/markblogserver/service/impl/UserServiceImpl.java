package com.felis.markblogserver.service.impl;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.felis.markblogserver.dao.UserDao;
import com.felis.markblogserver.entity.User;
import com.felis.markblogserver.service.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public void login(User user) throws AuthenticationException{
        String username = user.getUsername();
        String password = user.getPassword();
        Subject currentUser = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password,true);
        currentUser.login(token);
    }

    @Override
    public void logout(){
        Subject currentUser = SecurityUtils.getSubject();
        currentUser.logout();
    }

    @Override
    public User getUser(String username){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username",username);
        queryWrapper.eq("is_delete","N");
        return userDao.selectOne(queryWrapper);
    }

    @Override
    public void changePassword(User user){
        String credentialsSalt = user.getSalt();
        String hashedPassword=new SimpleHash("MD5", user.getPassword(), credentialsSalt, 1024).toString();
        user.setPassword(hashedPassword);
        userDao.updateById(user);
    }
}
