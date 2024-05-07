package com.sharep.be.modules.assignee.controller.response;

import com.sharep.be.modules.account.dto.AccountDto.AccountResponse;
import com.sharep.be.modules.issue.IssueNowResponse;

public record AssigneeProjectNowIssueResponse(AccountResponse account, IssueNowResponse issue) {
}
