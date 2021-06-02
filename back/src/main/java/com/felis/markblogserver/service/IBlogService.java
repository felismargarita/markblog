package com.felis.markblogserver.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.felis.markblogserver.entity.Blog;
import com.felis.markblogserver.entity.PageParam;

public interface IBlogService {

    IPage<Blog> getPaging(PageParam<Blog> pageParam);

    void add(Blog blog);

    void update(Blog blog);

    void delete(Long id);

    Blog getById(Long id);
}
