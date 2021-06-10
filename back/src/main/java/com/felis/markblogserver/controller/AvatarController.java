package com.felis.markblogserver.controller;

import com.felis.markblogserver.entity.Avatar;
import com.felis.markblogserver.entity.ResResult;
import com.felis.markblogserver.entity.User;
import com.felis.markblogserver.service.IAvatarService;
import com.felis.markblogserver.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@RequestMapping("/avatar")
@RestController
public class AvatarController extends BaseController {

    @Autowired
    private IUserService userService;

    @Autowired
    private IAvatarService avatarService;

    @PostMapping("/upload")
    public ResResult uploadAvatar(MultipartFile file) throws IOException {
        User user = userService.getUser(getUsername());
        Avatar avatar = new Avatar(
                null,
                user.getId(),
                file.getBytes(),
                new Date(),
                new Date()
        );
        avatarService.add(avatar);
        return success("/avatar/read");
    }

    @GetMapping("/read")
    public void getAvatar(HttpServletResponse response) throws IOException{
//        String username = getUsername();
        User user = userService.getUser("administrator");
        Avatar avatar = avatarService.getAvatar(user.getId());
        //读取文件
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        String contentType = "image/";
        response.setContentType(contentType);
        ServletOutputStream out = response.getOutputStream();
        out.write(avatar.getFile());
        out.close();
    }

}
