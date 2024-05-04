package com.sharep.be.modules.assignee.repository;

import com.querydsl.core.Tuple;
import com.sharep.be.modules.assignee.Assignee;
import java.util.List;
import java.util.Optional;

public interface AssigneeRepositoryCustom {

    List<Tuple> findAllProjectNowIssueByProjectId(Long projectsId);

    List<Tuple> findAllProjectNowIssueByProjectIdAndAccountID(Long projectId, Long accountId);

    Optional<Assignee> findByAccountIdAndProjectId(Long accountId, Long projectId);
}
