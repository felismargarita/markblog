package com.felis.markblogserver.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.felis.markblogserver.entity.BlogTag;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogTagDao extends BaseMapper<BlogTag> {
}
