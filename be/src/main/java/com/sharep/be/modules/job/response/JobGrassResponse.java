package com.sharep.be.modules.job.response;

public record JobGrassResponse(
        Integer jobCount,
        JobGrass[] jobs
) {

}
