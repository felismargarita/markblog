package com.felis.markblogserver.service;

import com.felis.markblogserver.entity.Tag;

import java.util.List;

public interface ITagService {

    void addTags(List<String> tags);

    int addTag(String name);

    List<String> getAllTags();

}
