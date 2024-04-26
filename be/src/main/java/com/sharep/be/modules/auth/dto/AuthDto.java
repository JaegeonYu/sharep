package com.sharep.be.modules.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

public class AuthDto {

    @Data
    public static class AuthRequestDto {

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;
    }

    @Data
    @AllArgsConstructor
    public static class ApiToken {

        private String apiToken;
    }
}
