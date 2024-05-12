package com.sharep.be.modules.notification.controller;

import lombok.Builder;

@Builder
public record NotificationIdResponse(
        Long notificationId
) {}
