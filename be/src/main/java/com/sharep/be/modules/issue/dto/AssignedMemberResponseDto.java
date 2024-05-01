package com.sharep.be.modules.issue.dto;

import com.sharep.be.modules.issue.type.IssueState;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class AssignedMemberResponseDto {

    private Long memberId;
    private IssueState state;
    private LocalDateTime startedAt;
    private LocalDateTime finishedAt;

}
