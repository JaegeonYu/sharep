package com.sharep.be.modules.job.response;

import com.sharep.be.modules.job.JobGrass;

public record JobGrassResponse(
        Integer jobCount,
        JobGrass[] jobs
) {

}
