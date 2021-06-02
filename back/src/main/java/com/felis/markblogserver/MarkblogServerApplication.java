package com.felis.markblogserver;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.felis.markblogserver.dao")
public class MarkblogServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(MarkblogServerApplication.class, args);
    }

}
