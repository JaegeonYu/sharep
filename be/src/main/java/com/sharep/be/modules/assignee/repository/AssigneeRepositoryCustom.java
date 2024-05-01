package com.sharep.be.modules.assignee.repository;

import com.sharep.be.modules.issue.Issue;
import java.util.List;

public interface AssigneeRepositoryCustom {

    List<Issue> findAllProjectNowIssueByProjectId(Long projectsId);
}
