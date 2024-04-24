package com.sharep.be.modules.auth;

import lombok.Getter;

@Getter
public class CustomAccountInfo {
    private Long id;
    private String email;
    private RoleType role;
}
