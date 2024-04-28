package com.sharep.be.modules.job.service.port;

import com.sharep.be.modules.job.domain.Job;

public interface JobRepository {

    void save(Job job);
}
