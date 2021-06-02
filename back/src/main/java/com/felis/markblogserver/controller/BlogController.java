package com.felis.markblogserver.controller;


import com.felis.markblogserver.entity.Blog;
import com.felis.markblogserver.entity.PageParam;
import com.felis.markblogserver.entity.ResResult;
import com.felis.markblogserver.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/blog")
public class BlogController extends BaseController {

    @Autowired
    private IBlogService blogService;

    @PostMapping("/paging")
    public ResResult getPaging(@RequestBody PageParam<Blog> pageParam){
        return success(blogService.getPaging(pageParam));
    }

    @PostMapping("/add")
    public ResResult add(@RequestBody Blog blog){
        blog.setCreatedBy(getUsername());
        blog.setUpdatedBy(getUsername());
        blog.setCreatedTime(new Date());
        blog.setUpdatedTime(new Date());
        blogService.add(blog);
        return success();
    }

    @PutMapping("/update")
    public ResResult update(@RequestBody Blog blog){
        blog.setUpdatedBy(getUsername());
        blog.setUpdatedTime(new Date());
        blogService.update(blog);
        return success();
    }

    @DeleteMapping("/delete")
    public ResResult update(Long id){
        blogService.delete(id);
        return success();
    }

    @GetMapping("/getById")
    public ResResult getById(Long id){
        return  success(blogService.getById(id));
    }
}
