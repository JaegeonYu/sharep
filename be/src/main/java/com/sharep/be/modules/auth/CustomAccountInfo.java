package com.sharep.be.modules.auth;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString
@Setter
public class CustomAccountInfo {
    private Long id;
    private String email;
    private RoleType role;
}
