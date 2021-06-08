package com.felis.markblogserver.service;

import com.felis.markblogserver.entity.User;
import org.springframework.web.multipart.MultipartFile;

public interface IUserService {
    void login(User user);
    void logout();
    User getUser(String username);
    void changePassword(User user);
}
