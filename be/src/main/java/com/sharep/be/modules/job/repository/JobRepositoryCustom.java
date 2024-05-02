package com.sharep.be.modules.job.repository;

import com.sharep.be.modules.job.Job;
import com.sharep.be.modules.member.Role.RoleType;
import java.util.List;

public interface JobRepositoryCustom {

    List<Job> findAllByProjectId(Long projectId);

    List<Job> findAllByAccountIdAndProjectId(Long accountId, Long projectId);

    List<Job> findAllByProjectIdAndRoleType(Long projectId, RoleType roleType);

    List<Job> findAllByProjectIdAndIssueId(Long projectId, Long issueId);
}
