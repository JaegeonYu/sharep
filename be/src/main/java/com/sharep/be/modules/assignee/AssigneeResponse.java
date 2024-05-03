package com.sharep.be.modules.assignee;

import lombok.Builder;

@Builder
public record AssigneeResponse(String name, String imageUrl) {

    public static AssigneeResponse from(Assignee assignee) {
        return AssigneeResponse.builder()
                .name(assignee.getMember().getAccount().getNickname())
                .imageUrl(assignee.getMember().getAccount().getImageUrl())
                .build();
    }

}
