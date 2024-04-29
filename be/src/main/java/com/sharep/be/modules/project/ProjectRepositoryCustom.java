package com.sharep.be.modules.project;

import com.sharep.be.modules.member.Member;
import java.util.List;

public interface ProjectRepositoryCustom {

    List<Project> findAllByAccountId(Long accountId);


}
