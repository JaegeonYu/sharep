package com.sharep.be.modules.job.controller.response;

import com.sharep.be.modules.job.domain.JobGrass;

public record JobGrassResponse(
        Integer jobCount,
        JobGrass[] jobs
) {

}
