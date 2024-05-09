package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.type.IssueType;
import java.util.List;

public interface CustomIssueRepository {

    List<Issue> findAllByMemberId(Long memberId);


    List<Issue> findAllByProjectIdAndIssueType(Long projectId, IssueType issueType);

    List<Issue> findAllByProjectId(Long projectId);
}
