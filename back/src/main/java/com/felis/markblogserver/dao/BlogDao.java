package com.felis.markblogserver.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.felis.markblogserver.entity.Blog;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogDao extends BaseMapper<Blog> {

    IPage<Blog> getPaging(Page<Blog> page, @Param("p") Blog blog);

    Blog getById(Long id);
}
