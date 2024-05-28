package com.sharep.be.modules.issue;

import com.sharep.be.modules.api.Api;
import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.issue.type.IssueType;
import com.sharep.be.modules.issue.type.PriorityType;
import com.sharep.be.modules.job.domain.Job;
import com.sharep.be.modules.project.Project;
import com.sharep.be.modules.storyboard.Storyboard;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import java.time.LocalDateTime;
import java.util.EnumMap;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@NoArgsConstructor
@Getter
@EntityListeners(AuditingEntityListener.class)
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30)
    private String issueName;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private IssueType type;

    @Column(length = 100)
    private String epic;

    @CreatedDate
    private LocalDateTime createdAt;

    @Enumerated(EnumType.STRING)
    private PriorityType priority;

    @OneToOne(mappedBy = "issue", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @PrimaryKeyJoinColumn
    private Api api;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Assignee> assignees;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Job> jobs;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Project project;

    @OneToMany(mappedBy = "featureIssue")
    private Set<Storyboard> featureStoryboards;

    @OneToMany(mappedBy = "screenIssue")
    private Set<Storyboard> screenStoryboards;


    @Builder
    public Issue(Long id, String issueName, String description, IssueType type, String epic,
            LocalDateTime createdAt, PriorityType priority, Api api, Set<Assignee> assignees,
            Set<Job> jobs, Project project, Set<Storyboard> featureStoryboards,
            Set<Storyboard> screenStoryboards) {
        this.id = id;
        this.issueName = issueName;
        this.description = description;
        this.type = type;
        this.epic = epic;
        this.createdAt = createdAt;
        this.priority = priority;
        this.api = api;
        this.assignees = assignees;
        this.jobs = jobs;
        this.project = project;
        this.featureStoryboards = featureStoryboards;
        this.screenStoryboards = screenStoryboards;
    }

    public void updateApi(Api api) {
        this.api = api;
    }

    public void update(String issueName, String description, String epic, PriorityType priority) {
        this.issueName = issueName;
        this.description = description;
        this.epic = epic;
        this.priority = priority;
    }

    public State calculateState() {
        EnumMap<State, Long> stateCount = assignees.stream().collect(
                Collectors.groupingBy(Assignee::getState, () -> new EnumMap<>(State.class),
                        Collectors.counting()));

        long size = assignees.size();
        long done = stateCount.getOrDefault(State.DONE, 0L);
        long yet = stateCount.getOrDefault(State.YET, 0L);

        if (yet == size) {
            return State.YET;
        } else if (done == size) {
            return State.DONE;
        } else {
            return State.NOW;
        }
    }
}
