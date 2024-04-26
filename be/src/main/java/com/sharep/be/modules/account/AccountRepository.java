package com.sharep.be.modules.account;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
    public Optional<Account> findByNickname(String nickname);
    public Optional<Account> findByEmail(String email0);

    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);
}
