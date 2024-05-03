package com.sharep.be.modules.assignee;

import lombok.Builder;

@Builder
public record AssigneeResponse(String name, String imageUrl) {

}
