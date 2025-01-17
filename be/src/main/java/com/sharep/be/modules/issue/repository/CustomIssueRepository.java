package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.type.DataType;
import com.sharep.be.modules.issue.type.IssueType;
import java.util.List;
import java.util.Optional;

public interface CustomIssueRepository {

    Optional<Issue> findByIssueId(Long id, DataType dataType);

    List<Issue> findAllByProjectIdAndAccountIdAndIssueType(
            Long projectId, Long accountId, IssueType issueType, DataType dataType);
}
