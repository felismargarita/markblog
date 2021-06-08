package com.felis.markblogserver.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("t_avatar")
public class Avatar {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    private Integer userId;
    private byte[] file;
    private Date createdTime;
    private Date updatedTime;
}
