package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.type.DataType;
import com.sharep.be.modules.issue.type.IssueType;
import java.util.List;

public interface CustomIssueRepository {

    List<Issue> findAllByProjectIdAndAccountIdAndIssueType(
            Long projectId, Long accountId, IssueType issueType, DataType dataType);
}
