package com.felis.markblogserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResResult {
    private int code;
    private String msg;
    private Object info;
}
