package com.sharep.be.modules.assignee.controller;

import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.member.MemberWithIssueResponse;
import java.util.List;

public interface AssigneeService {

    Long update(Long accountId, Long projectId, Long issueId, State state);

    Long create(Long projectId, Long issueId, Long accountId);

    Long delete(Long projectId, Long issueId, Long accountId);

    List<MemberWithIssueResponse> readProjectMemberNowIssue(Long projectId);

    List<MemberWithIssueResponse> readProjectMemberNowOwnIssue(Long projectId, Long accountId);
}
