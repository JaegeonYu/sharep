package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.Issue;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long>, CustomIssueRepository {

    List<Issue> findByProjectId(Long projectId);
}
