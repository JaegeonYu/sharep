package com.sharep.be.modules.job.response;

import com.sharep.be.modules.job.JobGrass;

public record JobGrassResponse(
        Integer year,
        Integer jobCount,
        JobGrass[] jobs
) {

}
