package com.sharep.be.modules.assignee;

import java.util.List;

public interface AssigneeRepositoryCustom {

    List<Assignee> findAllByProject(Long projectId);

}
