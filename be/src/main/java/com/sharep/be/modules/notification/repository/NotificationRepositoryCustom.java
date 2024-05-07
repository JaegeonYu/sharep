package com.sharep.be.modules.notification.repository;

import com.sharep.be.modules.notification.domain.Notification;
import java.util.List;

public interface NotificationRepositoryCustom {

    List<Notification> findAllByProjectIdAndAccountId(Long projectId, Long accountId);
}
