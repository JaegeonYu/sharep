package com.sharep.be.modules.job.repository;

import com.sharep.be.modules.job.Job;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long>, JobRepositoryCustom {

}
