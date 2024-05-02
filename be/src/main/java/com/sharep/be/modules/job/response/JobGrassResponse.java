package com.sharep.be.modules.job.response;

public record JobGrassResponse(
        Integer year,
        Integer jobCount,
        JobGrass[] jobs
) {

}
