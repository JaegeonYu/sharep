package com.sharep.be.modules.job.response;

import com.sharep.be.modules.job.domain.JobGrass;

public record JobGrassResponse(
        Integer jobCount,
        JobGrass[] jobs
) {

}
