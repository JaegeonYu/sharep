package com.sharep.be.modules.job.dto;

import com.sharep.be.modules.member.Role;
import com.sharep.be.modules.member.Role.RoleType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
@Setter
@ToString
public class JobReadRequest {
    private Long accountId;
    private RoleType roleType;
    private Long issueId;

}
