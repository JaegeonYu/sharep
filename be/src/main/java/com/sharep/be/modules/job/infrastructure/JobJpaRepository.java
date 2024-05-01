package com.sharep.be.modules.job.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobJpaRepository extends JpaRepository<JobEntity, Long> {

}
