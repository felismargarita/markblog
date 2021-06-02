package com.felis.markblogserver.entity;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

public class PageParam<T> extends Page<T> {

    private T params;

    public PageParam() {
    }

    public T getParams() {

        return params;
    }

    public void setParams(T params) {
        this.params = params;
    }

}