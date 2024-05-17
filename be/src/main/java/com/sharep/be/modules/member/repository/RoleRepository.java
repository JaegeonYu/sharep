package com.sharep.be.modules.member.repository;

import com.sharep.be.modules.member.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
