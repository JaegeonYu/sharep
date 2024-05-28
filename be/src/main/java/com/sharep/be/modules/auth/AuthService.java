package com.sharep.be.modules.auth;

import com.sharep.be.infra.config.JwtUtil;
import com.sharep.be.modules.account.Account;
import com.sharep.be.modules.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static com.sharep.be.modules.auth.dto.AuthDto.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final JwtUtil jwtUtil;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;

    public String login(AuthRequestDto authRequestDto) {
        String email = authRequestDto.getEmail();
        String password = authRequestDto.getPassword();
        Account account = accountRepository.findByEmail(email).orElseThrow(() ->
                new IllegalArgumentException("존재하지 않는 이메일 입니다"));

        if (!passwordEncoder.matches(password, account.getPassword())) {
            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
        }

        CustomAccountInfo customAccountInfo = new CustomAccountInfo(account);
        return jwtUtil.createAccessToken(customAccountInfo);
    }
}
