package com.sharep.be.modules.assignee.repository;

import com.sharep.be.modules.assignee.Assignee;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssigneeRepository extends JpaRepository<Assignee, Long>, AssigneeRepositoryCustom{

    Optional<Assignee> findByMemberIdAndIssueId(Long memberId, Long issueId);

    boolean existsByMemberIdAndIssueId(Long id, Long id1);
}
