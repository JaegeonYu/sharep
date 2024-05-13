package com.sharep.be.modules.member.repository;

import com.sharep.be.modules.member.Member;
import java.util.List;

public interface MemberRepositoryCustom {
    List<Member> findAllByProjectId(Long projectId);

    List<Member> findAllWithIssueAndJob();

    List<Member> findAllWithAssigneeByProjectId(Long projectId);

}
