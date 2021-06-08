package com.felis.markblogserver.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("t_blog")
public class Blog {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    private String title;
    private String content;
    private Date createdTime;
    private Date updatedTime;
    private String createdBy;
    private String updatedBy;
    private String isDelete;

    @TableField(exist = false)
    private List<String> tags;
}
