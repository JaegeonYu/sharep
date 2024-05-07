package com.sharep.be.modules.assignee.controller.response;

import com.sharep.be.modules.account.dto.AccountDto.AccountResponseDto;
import com.sharep.be.modules.issue.IssueNowResponse;

public record AssigneeProjectNowIssueResponse(AccountResponseDto account, IssueNowResponse issue) {
}
