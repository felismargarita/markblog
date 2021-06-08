package com.felis.markblogserver.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("t_blog_tag")
public class BlogTag {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private Integer blogId;
    private Integer tagId;
    private Date createdTime;
    private String createdBy;
}
