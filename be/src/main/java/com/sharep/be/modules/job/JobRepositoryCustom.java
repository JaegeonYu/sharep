package com.sharep.be.modules.job;

import com.sharep.be.modules.member.Role.RoleType;
import java.util.List;

public interface JobRepositoryCustom {

    List<Job> findAllByProjectId(Long projectId);

    List<Job> findAllByMemberId(Long accountId, Long projectId);

    List<Job> findAllByRoleType(RoleType roleType);

}
