package com.felis.markblogserver.service;

import java.util.List;

public interface IBlogTagService {

    void addBlogTags(Integer blogId,List<String> tags);

    void deleteTagsByBlogId(Integer blogId);

    List<String> getTagsByBlogId(Integer blogId);

    void updateBlogTags(Integer blogId,List<String> tags);
}
