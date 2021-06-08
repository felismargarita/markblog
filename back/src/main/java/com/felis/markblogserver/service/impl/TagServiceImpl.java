package com.felis.markblogserver.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.felis.markblogserver.dao.TagDao;
import com.felis.markblogserver.entity.Tag;
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
public class TagServiceImpl implements ITagService {

    @Autowired
    private TagDao tagDao;

    @Override
    public void addTags(List<String> tags){
        for(String name:tags){
            QueryWrapper<Tag> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("name",name);
            Tag tag = tagDao.selectOne(queryWrapper);
            if(tag == null){
                addTag(name);
            }
        }
   }

   @Override
    public int addTag(String name){
        Tag tag = new Tag(null,name,new Date(), SecurityUtils.getSubject().getPrincipal().toString());
        tagDao.insert(tag);
        return tag.getId();
   }

   @Override
    public List<String> getAllTags(){
        return tagDao.selectList(new QueryWrapper<>())
                .stream()
                .map(Tag::getName)
                .collect(Collectors.toList());
   }

}
