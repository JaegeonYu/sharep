package com.sharep.be.modules.notification.domain;

public record NotificationRefetchMessage(String message) {
    public NotificationRefetchMessage(){
        this("refetch");
    }
}
