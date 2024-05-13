package com.sharep.be.modules.project.repository;

import com.sharep.be.modules.member.Member;
import com.sharep.be.modules.project.Project;
import java.util.List;

public interface ProjectRepositoryCustom {

    List<Project> findAllByAccountId(Long accountId);


}
