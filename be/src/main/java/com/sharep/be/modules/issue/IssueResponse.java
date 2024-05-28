package com.sharep.be.modules.issue;

import com.sharep.be.modules.api.ApiResponse;
import com.sharep.be.modules.assignee.controller.response.AssigneeResponse;
import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.issue.type.IssueType;
import com.sharep.be.modules.issue.type.PriorityType;
import com.sharep.be.modules.job.controller.response.JobResponse;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;
import lombok.Builder;

@Builder
public record IssueResponse(Long id, String issueName, String description, IssueType type,
                            String epic, State state, LocalDateTime createdAt,
                            PriorityType priority,
                            LocalDateTime startedAt, LocalDateTime finishedAt,
                            ApiResponse api,
                            List<AssigneeResponse> assignees, List<JobResponse> jobs,
                            List<SimpleIssueResponse> connectedIssues

) {


    public static IssueResponse from(Issue issue) {
        return IssueResponse.builder()
                .id(issue.getId())
                .issueName(issue.getIssueName())
                .description(issue.getDescription())
                .type(issue.getType())
                .epic(issue.getEpic())
                .state(issue.calculateState())
                .createdAt(issue.getCreatedAt())
                .priority(issue.getPriority())
                .startedAt(issue.getAssignees().stream()
                        .filter(assignee -> assignee.getStartedAt() != null)
                        .min(Comparator.comparing(Assignee::getStartedAt))
                        .map(Assignee::getStartedAt).orElse(null))
                .finishedAt(issue.getAssignees().stream()
                        .filter(assignee -> assignee.getFinishedAt() != null)
                        .max(Comparator.comparing(Assignee::getFinishedAt))
                        .map(Assignee::getStartedAt).orElse(null))
                .api(ApiResponse.from(issue.getApi()))
                .assignees(issue.getAssignees().stream().map(AssigneeResponse::from).toList())
                .jobs(issue.getJobs().stream().map(JobResponse::from).toList())
                .connectedIssues(Stream.concat(
                        issue.getFeatureStoryboards().stream()
                                .map(storyboard -> SimpleIssueResponse.from(
                                        storyboard.getScreenIssue(), storyboard.getId())),
                        issue.getScreenStoryboards().stream()
                                .map(storyboard -> SimpleIssueResponse.from(
                                        storyboard.getFeatureIssue(), storyboard.getId()))
                ).toList())
                .build();
    }

    @Builder
    public record SimpleIssueResponse(Long id, Long connectionId, String issueName,
                                      String description,
                                      IssueType type,
                                      String epic, State state, LocalDateTime createdAt,
                                      PriorityType priority,
                                      LocalDateTime startedAt, LocalDateTime finishedAt,
                                      ApiResponse api,
                                      List<AssigneeResponse> assignees, List<JobResponse> jobs) {

        public static SimpleIssueResponse from(Issue issue) {
            return SimpleIssueResponse.builder()
                    .id(issue.getId())
                    .issueName(issue.getIssueName())
                    .description(issue.getDescription())
                    .type(issue.getType())
                    .epic(issue.getEpic())
                    .state(issue.calculateState())
                    .createdAt(issue.getCreatedAt())
                    .priority(issue.getPriority())
                    .startedAt(issue.getAssignees().stream()
                            .filter(assignee -> assignee.getStartedAt() != null)
                            .min(Comparator.comparing(Assignee::getStartedAt))
                            .map(Assignee::getStartedAt).orElse(null))
                    .finishedAt(issue.getAssignees().stream()
                            .filter(assignee -> assignee.getFinishedAt() != null)
                            .max(Comparator.comparing(Assignee::getFinishedAt))
                            .map(Assignee::getStartedAt).orElse(null))
                    .api(ApiResponse.from(issue.getApi()))
                    .assignees(issue.getAssignees().stream().map(AssigneeResponse::from).toList())
                    .jobs(issue.getJobs().stream().map(JobResponse::from).toList())
                    .build();
        }

        public static SimpleIssueResponse from(Issue issue, Long connectionId) {
            return SimpleIssueResponse.builder()
                    .id(issue.getId())
                    .connectionId(connectionId)
                    .issueName(issue.getIssueName())
                    .description(issue.getDescription())
                    .type(issue.getType())
                    .epic(issue.getEpic())
                    .state(issue.calculateState())
                    .createdAt(issue.getCreatedAt())
                    .priority(issue.getPriority())
                    .startedAt(issue.getAssignees().stream()
                            .filter(assignee -> assignee.getStartedAt() != null)
                            .min(Comparator.comparing(Assignee::getStartedAt))
                            .map(Assignee::getStartedAt).orElse(null))
                    .finishedAt(issue.getAssignees().stream()
                            .filter(assignee -> assignee.getFinishedAt() != null)
                            .max(Comparator.comparing(Assignee::getFinishedAt))
                            .map(Assignee::getStartedAt).orElse(null))
                    .api(ApiResponse.from(issue.getApi()))
                    .assignees(issue.getAssignees().stream().map(AssigneeResponse::from).toList())
                    .jobs(issue.getJobs().stream().map(JobResponse::from).toList())
                    .build();
        }
    }

    @Builder
    public record IssueCreated(Long id) {

        public static IssueCreated from(Issue issue) {
            return IssueCreated.builder()
                    .id(issue.getId())
                    .build();
        }
    }
}
