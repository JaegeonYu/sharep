package com.sharep.be.modules.api.repository;

import static com.sharep.be.modules.account.QAccount.account;
import static com.sharep.be.modules.api.QApi.api;
import static com.sharep.be.modules.assignee.domain.QAssignee.assignee;
import static com.sharep.be.modules.issue.QIssue.issue;
import static com.sharep.be.modules.member.QMember.member;
import static com.sharep.be.modules.project.QProject.project;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sharep.be.modules.api.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CustomApiRepositoryImpl implements CustomApiRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Api> findApisByProjectId(Long projectId) {
        return queryFactory
                .select(api)
                .from(api)
                .innerJoin(api.issue, issue).fetchJoin()
                .leftJoin(issue.assignees, assignee).fetchJoin()
                .leftJoin(assignee.member, member).fetchJoin()
                .leftJoin(member.account, account).fetchJoin()
                .leftJoin(member.roles).fetchJoin()
                .innerJoin(issue.project, project)
                .where(project.id.eq(projectId))
                .fetch();
    }
}
