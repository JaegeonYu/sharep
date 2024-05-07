package com.sharep.be.modules.assignee.repository.projection;

import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.member.Member;

public record MemberAndIssueProjection(
        Member member,
        Issue issue
) {

}
