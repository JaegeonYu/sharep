package com.sharep.be.modules.notification.repository;

import com.querydsl.core.Tuple;
import java.util.List;

public interface NotificationRepositoryCustom {

    List<Tuple> findALlByProjectIdAndAccountId(Long projectId, Long accountId);
}
