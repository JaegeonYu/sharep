package com.sharep.be.modules.security;

import lombok.ToString;

import static com.google.common.base.Preconditions.checkArgument;

@ToString
public class JwtAuthentication {

    public final Long id;
    public final String email;

    public JwtAuthentication(Long id, String email) {
        checkArgument(id != null, "id must be provided.");
        checkArgument(email != null, "email must be provided.");
        this.id = id;
        this.email = email;
    }

}
