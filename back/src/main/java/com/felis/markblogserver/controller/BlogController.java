package com.felis.markblogserver.controller;


import com.felis.markblogserver.entity.ResResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @GetMapping("/test")
    public ResResult test(){
        ResResult resResult = new ResResult();
        resResult.setCode(200);
        resResult.setMsg("success");
        resResult.setInfo("最近在考虑搭建自己的个人空间,用于部署博客,展示自己平时玩的小项目,以及部署自己开源项目的文档.\n" +
                "\n" +
                "## 1.前后台独立开发,前台用富文本编辑器\n" +
                "## 2.用类似hexo和vuepress或者dumi这样的静态页生成器\n" +
                "\n" +
                "显然第一个选项开发量较大,而且太重了,故而放弃;第二个选项dumi主要适应组件库文档,hexo当然也不错,但是考虑到vuepress内置的md扩展可以使用vue,后续写技术文档会方便很多,所以在搜罗了一堆主题后,决定使用vuepress+reco主题来开展我的个人博客.\n" +
                "后续我会把我的个人笔记以博客的形式整理出来,涉及的内容较多比如前后台开发相关的笔记,linux和数据库相关的一些技术积累,一些当年做运维时留下的经验等等.");
        return resResult;
    }
}
