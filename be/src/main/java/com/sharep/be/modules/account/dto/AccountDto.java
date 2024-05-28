package com.sharep.be.modules.account.dto;

import com.sharep.be.modules.account.Account;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


public class AccountDto {

    public record AccountCreate(
            @NotBlank
            @Size(min = 1, max = 8)
            @Pattern(regexp = "^[ㄱ-ㅎ가-힣a-z0-9_-]{1,8}$")
            String nickname,
            @NotBlank
            @Email
            String email,
            @NotBlank
            @Size(min = 8, max = 20)
            String password

    ) {


    }


    public record AccountResponse(
            Long id,
            String nickname,
            String email,
            String imageUrl
    ) {
    }

    public static Account toEntity(AccountCreate accountCreate) {
        return Account.builder()
                .nickname(accountCreate.nickname)
                .password(accountCreate.password)
                .email(accountCreate.email)
                .build();
    }

    public static AccountResponse toDto(Account account) {
        return new AccountResponse(account.getId(),
                account.getNickname(), account.getEmail(), account.getImageUrl());
    }
}
