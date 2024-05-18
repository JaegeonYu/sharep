package com.sharep.be.modules.job.repository;

import com.sharep.be.modules.job.domain.Job;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobJpaRepository extends JpaRepository<Job, Long> {

    Optional<Job> findByCommitId(String commitId);
}
