package com.sharep.be.modules.member;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom{

    Optional<Long> findMemberIdByAccountIdAndProjectId(Long accountId, Long projectId);

    Optional<Member> findMemberByAccountIdAndProjectId(Long accountId, Long projectId);

    Optional<Member> findByAccountIdAndProjectId(Long accountId, Long projectId);
}
