package com.sharep.be.modules.account.validator;


import com.sharep.be.modules.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import static com.sharep.be.modules.account.dto.AccountDto.AccountCreate;

@Component
@RequiredArgsConstructor
public class AccountValidator implements Validator {

    private final AccountRepository accountRepository;


    @Override
    public boolean supports(Class<?> clazz) {
        System.out.println("support");
        return AccountCreate.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        AccountCreate signUpForm = (AccountCreate) target;
        System.out.println("checkehck");

        if (accountRepository.existsByEmail(signUpForm.email())) {
//            errors.rejectValue("email", "email.duplicate", "이미 사용 중인 이메일입니다.");
            throw new IllegalArgumentException("이미 사용중인 이메일입니다.");
        }
//
//        if (accountRepository.existsByNickname(signUpForm.getEmail())) {
//            throw new IllegalArgumentException("이미 사용중인 닉네임입니다.");
////            errors.rejectValue("nickname", "nickname.duplicate", "이미 사용 중인 닉네임입니다.");        }
//        }
    }
}
