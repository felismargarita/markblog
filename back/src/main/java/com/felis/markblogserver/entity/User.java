package com.felis.markblogserver.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.felis.markblogserver.validation.custom.StringLength;
import com.felis.markblogserver.validation.group.Add;
import com.felis.markblogserver.validation.group.Update;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("t_user")
public class User {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @NotNull(message = "用户名必填",groups = {Add.class,Update.class})
    @StringLength(min = 1,max=256,message = "用户名长度不符合要求",groups = {Add.class, Update.class})
    private String username;

    @NotNull(message = "昵称必填",groups = {Add.class,Update.class})
    @StringLength(min = 1,max=256,message = "昵称长度不符合要求",groups = {Add.class, Update.class})
    private String nickname;

    @NotNull(message = "密码必填",groups = {Add.class,Update.class})
    @StringLength(min = 1,max=256,message = "密码长度不符合要求",groups = {Add.class, Update.class})
    private String password;
    private String salt;
    private Date createdTime;
    private Date updatedTime;
    private String createdBy;
    private String updatedBy;
    private String isDelete;
}
