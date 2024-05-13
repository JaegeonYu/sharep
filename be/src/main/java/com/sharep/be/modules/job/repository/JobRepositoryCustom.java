package com.sharep.be.modules.job.repository;

import com.sharep.be.modules.job.domain.Job;
import com.sharep.be.modules.member.Role.RoleType;
import java.util.List;

public interface JobRepositoryCustom {
    List<Job> findAllByAccountId(Long accountId);

    List<Job> findContributionByProjectIdAndAccountId(Long projectId, Long accountId);

    List<Job> findAllByCondition(Long projectId, Long accountId, Long issueId, RoleType roleType);
}
