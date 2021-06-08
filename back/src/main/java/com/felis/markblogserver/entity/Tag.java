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
@TableName("t_tag")
public class Tag {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private Date createdTime;
    private String createdBy;
}
