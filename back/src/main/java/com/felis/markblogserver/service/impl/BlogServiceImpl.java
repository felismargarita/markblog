package com.felis.markblogserver.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.felis.markblogserver.dao.BlogDao;
import com.felis.markblogserver.entity.Blog;
import com.felis.markblogserver.entity.PageParam;
import com.felis.markblogserver.service.IBlogService;
import com.felis.markblogserver.service.IBlogTagService;
import com.felis.markblogserver.service.ITagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BlogServiceImpl implements IBlogService {

    @Autowired
    private BlogDao blogDao;

    @Autowired
    private ITagService tagService;

    @Autowired
    private IBlogTagService blogTagService;

    @Override
    public IPage<Blog> getPaging(PageParam<Blog> pageParam){
        IPage<Blog> blogIPage = blogDao.getPaging(pageParam,pageParam.getParams());
        blogIPage.getRecords().forEach(b->{
            b.setTags(blogTagService.getTagsByBlogId(b.getId()));
        });
        return blogIPage;
    }

    @Override
    public void add(Blog blog){
        blogDao.insert(blog);
        blogTagService.addBlogTags(blog.getId(),blog.getTags());
    }

    @Override
    public void update(Blog blog){
        blogDao.updateById(blog);
        blogTagService.updateBlogTags(blog.getId(),blog.getTags());
    }

    @Override
    public void delete(Integer id){
        UpdateWrapper<Blog> updateWrapper = new UpdateWrapper<>();
        updateWrapper.set("is_delete","Y");
        updateWrapper.eq("id",id);
        blogDao.update(null,updateWrapper);
    }

    @Override
    public Blog getById(Integer id){
        Blog blog = blogDao.getById(id);
        blog.setTags(blogTagService.getTagsByBlogId(id));
        return  blog;
    }

    @Override
    public List<Blog> getAllBlogs(){
        List<Blog> blogs = blogDao.selectList(new QueryWrapper<Blog>().eq("is_delete","N"));
        blogs.forEach(b->{
            b.setContent("");
            b.setTags(blogTagService.getTagsByBlogId(b.getId()));
        });
        return blogs;
    }
}
