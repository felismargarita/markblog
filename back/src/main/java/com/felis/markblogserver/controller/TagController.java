package com.felis.markblogserver.controller;

import com.felis.markblogserver.entity.ResResult;
import com.felis.markblogserver.service.ITagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tag")
public class TagController extends BaseController{

    @Autowired
    private ITagService tagService;

    @GetMapping("/all")
    public ResResult getAll(){
        List<String> tags = tagService.getAllTags();
        return success(tags);
    }
}
