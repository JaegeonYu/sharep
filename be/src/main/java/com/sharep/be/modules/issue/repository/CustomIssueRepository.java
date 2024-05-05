package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.type.IssueType;
import java.util.List;

public interface CustomIssueRepository {

    List<Issue> findIssuesByMemberIdAndIssueType(Long memberId, IssueType issueType);

    List<Issue> findIssuesByProjectIdAndIssueType(Long projectId, IssueType issueType);

    List<Issue> findByProjectId(Long projectId);
}
