package com.felis.markblogserver.service;

import com.felis.markblogserver.entity.Avatar;

public interface IAvatarService {
    void add(Avatar avatar);

    Avatar getAvatar(int userId);
}
