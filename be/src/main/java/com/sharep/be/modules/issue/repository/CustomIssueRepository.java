package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.type.IssueType;
import java.util.List;

public interface CustomIssueRepository {

    List<Issue> findIssuesByMemberId(Long memberId);


    List<Issue> findIssuesByProjectIdAndIssueType(Long projectId, IssueType issueType);

    List<Issue> findIssuesByProjectId(Long projectId);

}
