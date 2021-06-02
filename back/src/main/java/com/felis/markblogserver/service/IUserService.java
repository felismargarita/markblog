package com.felis.markblogserver.service;

import com.felis.markblogserver.entity.User;

public interface IUserService {
    void login(User user);
    void logout();
    User getUser(String username);
}
