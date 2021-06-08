package com.felis.markblogserver.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.felis.markblogserver.dao.BlogTagDao;
import com.felis.markblogserver.dao.TagDao;
import com.felis.markblogserver.entity.BlogTag;
import com.felis.markblogserver.entity.Tag;
import com.felis.markblogserver.service.IBlogTagService;
import com.felis.markblogserver.service.ITagService;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BlogTagServiceImpl implements IBlogTagService {

    @Autowired
    private BlogTagDao blogTagDao;

    @Autowired
    private TagDao tagDao;

    @Autowired
    private ITagService tagService;

    @Override
    public void addBlogTags(Integer blogId,List<String> tags){
        if(tags==null){
            return;
        }
        tagService.addTags(tags);
        for(String name:tags){
            QueryWrapper<Tag> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("name",name);
            Tag tag = tagDao.selectOne(queryWrapper);
            BlogTag blogTag = new BlogTag(null,blogId,tag.getId(),new Date(), SecurityUtils.getSubject().getPrincipal().toString());
            blogTagDao.insert(blogTag);
        }

    }

    @Override
    public void deleteTagsByBlogId(Integer blogId){
        QueryWrapper<BlogTag> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("blog_id",blogId);
        blogTagDao.delete(queryWrapper);
    }

    @Override
    public List<String> getTagsByBlogId(Integer blogId){
        QueryWrapper<BlogTag> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("blog_id",blogId);
        return blogTagDao.selectList(queryWrapper)
                .stream()
                .map(bt->tagDao.selectById(bt.getTagId()))
                .map(Tag::getName)
                .collect(Collectors.toList());
    }

    @Override
    public void updateBlogTags(Integer blogId,List<String> tags){
        deleteTagsByBlogId(blogId);
        addBlogTags(blogId,tags);
    }
}
