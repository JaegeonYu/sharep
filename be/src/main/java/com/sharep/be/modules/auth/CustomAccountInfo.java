package com.sharep.be.modules.auth;

import com.sharep.be.modules.account.Account;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

@Getter
@ToString
@Setter
public class CustomAccountInfo extends User {
    private Account account;
    private Long id;
    private String email;
    private List<String> roles;


    public CustomAccountInfo(Account account) {
        super(account.getEmail(), account.getPassword(), List.of(new SimpleGrantedAuthority("ROLE_USER")));
        this.account = account;
        this.id = account.getId();
        this.email = account.getEmail();
        this.roles = List.of("ROLE_USER");
    }


}
