package com.sharep.be.modules.job.infrastructure;

import com.sharep.be.modules.job.domain.Job;
import com.sharep.be.modules.job.service.port.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class JobRepositoryImpl implements JobRepository {

    private final JobJpaRepository jobJpaRepository;

    @Override
    public void save(Job job) {
        jobJpaRepository.save(JobEntity.from(job));
    }


}
