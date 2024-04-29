package com.sharep.be.modules.job.contoller.port;


import com.sharep.be.modules.job.domain.JobCreate;
import org.springframework.web.multipart.MultipartFile;

public interface JobService {

    void create(Long memberId, JobCreate jobCreate, MultipartFile image);
}
