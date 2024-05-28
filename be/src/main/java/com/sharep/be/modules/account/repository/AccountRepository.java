package com.sharep.be.modules.account.repository;

import com.sharep.be.modules.account.Account;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {

    public Optional<Account> findByNickname(String nickname);

    public Optional<Account> findByEmail(String email);

    public List<Account> findByEmailContaining(String email);

    boolean existsByEmail(String email);

    boolean existsByNickname(String nickname);
}
