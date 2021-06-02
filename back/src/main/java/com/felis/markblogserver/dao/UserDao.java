package com.felis.markblogserver.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.felis.markblogserver.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends BaseMapper<User> {

}
