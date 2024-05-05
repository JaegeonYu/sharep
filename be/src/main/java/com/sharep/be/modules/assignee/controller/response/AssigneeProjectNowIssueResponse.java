package com.sharep.be.modules.assignee.controller.response;

import com.sharep.be.modules.account.dto.AccountDto.AccountResponseDto;
import com.sharep.be.modules.issue.IssueResponse;

public record AssigneeProjectNowIssueResponse(AccountResponseDto account, IssueResponse issue) {
}
