package com.sharep.be.modules.notification.controller.response;

import lombok.Builder;

@Builder
public record NotificationIdResponse(
        Long notificationId
) {}
