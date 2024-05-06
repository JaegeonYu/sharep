package com.sharep.be.modules.notification.repository;

import com.sharep.be.modules.notification.domain.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long>, NotificationRepositoryCustom {

}
