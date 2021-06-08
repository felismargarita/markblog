package com.felis.markblogserver.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.felis.markblogserver.dao.AvatarDao;
import com.felis.markblogserver.entity.Avatar;
import com.felis.markblogserver.service.IAvatarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class AvatarServiceImpl implements IAvatarService {

    @Autowired
    private AvatarDao avatarDao;


    @Override
    public void add(Avatar newAvatar){
        QueryWrapper<Avatar> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id",newAvatar.getUserId());
        Avatar avatar = avatarDao.selectOne(queryWrapper);
        if(avatar==null){
            avatarDao.insert(newAvatar);
        }else{
            newAvatar.setId(avatar.getId());
            avatarDao.updateById(newAvatar);
        }
    }

    @Override
    public Avatar getAvatar(int userId){
        QueryWrapper<Avatar> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id",userId);
        return avatarDao.selectOne(queryWrapper);
    }

}
