package com.sharep.be.modules.assignee.controller.response;

import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.member.Role;
import com.sharep.be.modules.member.Role.RoleType;
import java.util.List;
import java.util.Optional;
import lombok.Builder;

@Builder
public record AssigneeResponse(Long id, State state, Long accountId, String name, String imageUrl,
                               List<RoleType> roles) {

    public static AssigneeResponse from(Assignee assignee) {
        return Optional.ofNullable(assignee)
                .map(a -> AssigneeResponse.builder()
                        .id(assignee.getId())
                        .state(assignee.getState())
                        .accountId(assignee.getMember().getAccount().getId())
                        .name(a.getMember().getAccount().getNickname())
                        .imageUrl(a.getMember().getAccount().getImageUrl())
                        .roles(a.getMember().getRoles().stream().map(Role::getRole).toList())
                        .build()
                ).orElse(null);
    }
}
