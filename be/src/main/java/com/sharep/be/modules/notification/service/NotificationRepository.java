package com.sharep.be.modules.notification.service;

import com.sharep.be.modules.notification.domain.Notification;
import java.util.List;
import java.util.Optional;

public interface NotificationRepository {

    Optional<Notification> findByIdAndMemberAccountId(Long notificationId, Long accountId);

    List<Notification> findAllByProjectIdAndAccountId(Long projectId, Long accountId);

    Notification save(Notification notification);
}
