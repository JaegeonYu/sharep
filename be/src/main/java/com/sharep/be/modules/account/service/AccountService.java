package com.sharep.be.modules.account.service;

import com.sharep.be.modules.account.Account;
import com.sharep.be.modules.account.dto.AccountDto;
import com.sharep.be.modules.account.repository.AccountRepository;
import com.sharep.be.modules.auth.CustomAccountInfo;
import com.sharep.be.modules.common.service.port.S3Repository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import static com.sharep.be.modules.account.dto.AccountDto.*;

@Service
@RequiredArgsConstructor
@Transactional
public class AccountService implements UserDetailsService {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final S3Repository s3Repository;

    public AccountResponse signUp(AccountCreate accountCreate) {

        AccountCreate encodeAccount = new AccountCreate(accountCreate.nickname(),
                accountCreate.email(),
                passwordEncoder.encode(accountCreate.password()));// Password Encode
        return toDto(accountRepository.save(toEntity(encodeAccount)));
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        return new CustomAccountInfo(account);
    }

    public void updateImage(Long accountId, MultipartFile image){
        String imageUrl = s3Repository.saveFile(image);
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new UsernameNotFoundException("no user"));
        account.updateImage(imageUrl);
    }

    public Account readAccount(Long accountId){
        return accountRepository.findById(accountId).
                orElseThrow(() -> new UsernameNotFoundException("no user"));
    }

    public List<Account> readAccounts(String email){
        return accountRepository.findByEmailContaining(email);
    }
}
