package com.sharep.be.modules.project.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import static com.sharep.be.modules.member.Role.RoleType;

public class MemberDto {
    @Data
    @NoArgsConstructor
    public static class MemberRequestDto{
        private Long id;

        private List<RoleType> roles;

    }
}
