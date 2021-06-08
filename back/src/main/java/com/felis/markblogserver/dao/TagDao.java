package com.felis.markblogserver.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.felis.markblogserver.entity.Tag;
import org.springframework.stereotype.Repository;

@Repository
public interface TagDao extends BaseMapper<Tag> {
}
