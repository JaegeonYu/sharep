package com.sharep.be.modules.job.controller.request;

import com.sharep.be.modules.member.Role.RoleType;

public record JobReadRequest(
        Long accountId,
        RoleType roleType,
        Long issueId

) {

}
