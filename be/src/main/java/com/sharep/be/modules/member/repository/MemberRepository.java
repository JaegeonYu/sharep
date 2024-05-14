package com.sharep.be.modules.member.repository;

import com.sharep.be.modules.member.Member;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom{

    Optional<Member> findByAccountIdAndProjectId(Long accountId, Long projectId);

    List<Member> findAllByProjectIdAndAccountIdIn(Long projectId, List<Long> accountIds);
}
