package com.sharep.be.modules.assignee.repository;

import com.sharep.be.modules.assignee.domain.Assignee;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssigneeJpaRepository extends JpaRepository<Assignee, Long> {

    Optional<Assignee> findByMemberIdAndIssueId(Long memberId, Long issueId);

    boolean existsByMemberIdAndIssueId(Long memberId, Long issueId);

}
