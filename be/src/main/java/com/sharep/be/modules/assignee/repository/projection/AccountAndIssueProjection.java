package com.sharep.be.modules.assignee.repository.projection;

import com.sharep.be.modules.account.Account;
import com.sharep.be.modules.issue.Issue;

public record AccountAndIssueProjection(
        Account account,
        Issue issue
) {

}
