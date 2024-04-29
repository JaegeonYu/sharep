package com.sharep.be.modules.issue;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {

    Optional<List<Issue>> findIssuesByProjectId(Long projectId);
}
