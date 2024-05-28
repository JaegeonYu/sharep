package com.sharep.be.modules.issue;

import com.sharep.be.modules.issue.type.IssueType;
import com.sharep.be.modules.issue.type.PriorityType;
import com.sharep.be.modules.project.Project;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record IssueRequest() {

    public record IssueCreate(@Size(min = 1, max = 32) String issueName,
                              String description, @NotNull IssueType type, String epic,
                              PriorityType priority) {

        public Issue toEntityWith(Project project) {
            return Issue.builder()
                    .issueName(issueName)
                    .description(description)
                    .type(type)
                    .epic(epic)
                    .priority(priority)
                    .project(project)
                    .build();
        }
    }

    public record IssueUpdate(@Size(min = 1, max = 32) String issueName,
                              String description, String epic, PriorityType priority) {

    }
}
