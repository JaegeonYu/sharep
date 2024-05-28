package com.sharep.be.modules.assignee.service;

import com.sharep.be.modules.assignee.domain.Assignee;
import java.util.List;
import java.util.Optional;

public interface AssigneeRepository {

    Optional<Assignee> findByMemberIdAndIssueId(Long memberId, Long issueId);

    boolean existsByMemberIdAndIssueId(Long id, Long id1);

    Optional<Assignee> findByMemberProjectIdAndIssueIdAndMemberAccountId(Long projectId,
            Long issueId, Long accountId);

    Optional<Assignee> findByAccountIdAndProjectId(Long accountId, Long projectId);

    List<Assignee> findAccountIdsByIssueId(Long issueId);

    void save(Assignee assignee);

    void delete(Assignee assignee);
}
