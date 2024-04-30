package com.sharep.be.modules.assignee.repository;

import com.querydsl.core.Tuple;
import java.util.List;

public interface AssigneeRepositoryCustom {

    List<Tuple> findAllProjectNowIssueByProjectId(Long projectsId);

    List<Tuple> findAllProjectNowIssueByProjectIdAndAccountID(Long projectId, Long accountId);
}
