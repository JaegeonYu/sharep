package com.sharep.be.modules.job.service;


import java.util.Optional;

import com.sharep.be.modules.job.domain.Job;
import com.sharep.be.modules.job.repository.JobRepositoryCustom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long>, JobRepositoryCustom {
    Optional<Job> findByCommitId(String commitId);

}
