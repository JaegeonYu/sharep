package com.sharep.be.modules.issue;

import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.issue.type.IssueType;
import com.sharep.be.modules.issue.type.PriorityType;
import lombok.Builder;

@Builder
public record IssueNowResponse(
        Long id,
        String issueName,
        String description,
        IssueType type,
        String epic,
        PriorityType priority,
        State state

) {

    public static IssueNowResponse from(Issue issue) {
        return IssueNowResponse.builder()
                .id(issue.getId())
                .issueName(issue.getIssueName())
                .description(issue.getDescription())
                .type(issue.getType())
                .epic(issue.getEpic())
                .priority(issue.getPriority())
                .state(State.NOW)
                .build();
    }

}
