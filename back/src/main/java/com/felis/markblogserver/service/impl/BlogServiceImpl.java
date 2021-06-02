package com.felis.markblogserver.service.impl;

import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.felis.markblogserver.dao.BlogDao;
import com.felis.markblogserver.entity.Blog;
import com.felis.markblogserver.entity.PageParam;
import com.felis.markblogserver.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements IBlogService {

    @Autowired
    private BlogDao blogDao;

    @Override
    public IPage<Blog> getPaging(PageParam<Blog> pageParam){
        return blogDao.getPaging(pageParam,pageParam.getParams());
    }

    public void add(Blog blog){
        blogDao.insert(blog);
    }

    public void update(Blog blog){
        blogDao.updateById(blog);
    }

    public void delete(Long id){
        UpdateWrapper<Blog> updateWrapper = new UpdateWrapper<>();
        updateWrapper.set("is_delete","Y");
        updateWrapper.eq("id",id);
        blogDao.update(null,updateWrapper);
    }

    public Blog getById(Long id){
        return blogDao.getById(id);
    }
}
