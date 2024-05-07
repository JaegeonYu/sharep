package com.sharep.be.modules.member.repository;

import com.sharep.be.modules.member.Member;
import java.util.List;

public interface MemberRepositoryCustom {
    List<Member> findAllByProjectIdAndAccountId(Long projectId, Long accountId);

    List<Member> findAllWithIssueAndJob();
}
