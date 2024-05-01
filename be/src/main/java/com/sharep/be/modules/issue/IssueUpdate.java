package com.sharep.be.modules.issue;

import com.sharep.be.modules.issue.type.PriorityType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record IssueUpdate(@NotBlank Long id, @NotBlank @Size(min = 1, max = 32) String issueName,
                          String description, String epic, PriorityType priority) {

}
