package com.sharep.be.modules.member;

import java.util.List;

public interface MemberRepositoryCustom {
    List<Member> findAllByProjectIdAndAccountId(Long projectId, Long accountId);

    List<Member> findAllWithIssueAndJob();
}
