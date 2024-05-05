package com.sharep.be.modules.job.controller.request;

import com.sharep.be.modules.member.Role;
import com.sharep.be.modules.member.Role.RoleType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.GetMapping;

public record JobReadRequest(
        Long accountId,
        RoleType roleType,
        Long issueId

) {

}
