package com.sharep.be.modules.project;

import java.util.List;

public interface ProjectRepositoryCustom {

    List<Project> findAllByAccountId(Long accountId);
}
