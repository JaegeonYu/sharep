package com.sharep.be.modules.notification.repository;

import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.notification.domain.Notification;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationJpaRepository extends JpaRepository<Notification, Long> {

    Optional<Notification> findByIdAndMemberAccountId(Long notificationId, Long accountId);

    void deleteAllByAssignee(Assignee assignee);
}
