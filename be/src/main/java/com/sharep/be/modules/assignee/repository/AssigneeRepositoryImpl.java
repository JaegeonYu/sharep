package com.sharep.be.modules.assignee.repository;

import static com.sharep.be.modules.account.QAccount.account;
import static com.sharep.be.modules.api.QApi.api;
import static com.sharep.be.modules.assignee.domain.QAssignee.assignee;
import static com.sharep.be.modules.issue.QIssue.issue;
import static com.sharep.be.modules.member.QMember.member;
import static com.sharep.be.modules.member.QRole.role1;
import static com.sharep.be.modules.project.QProject.project;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.assignee.service.AssigneeRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;


@Repository
@RequiredArgsConstructor
public class AssigneeRepositoryImpl implements AssigneeRepository {

    private final JPAQueryFactory queryFactory;
    private final AssigneeJpaRepository assigneeJpaRepository;

    @Override
    public Optional<Assignee> findByMemberIdAndIssueId(Long memberId, Long issueId) {
        return assigneeJpaRepository.findByMemberIdAndIssueId(memberId, issueId);
    }

    @Override
    public boolean existsByMemberIdAndIssueId(Long memberId, Long issueId) {
        return assigneeJpaRepository.existsByMemberIdAndIssueId(memberId, issueId);
    }

    @Override
    public Optional<Assignee> findByMemberProjectIdAndIssueIdAndMemberAccountId(Long projectId, Long issueId,
            Long accountId) {
        return Optional.ofNullable(queryFactory.select(assignee)
                .from(assignee)
                .innerJoin(assignee.member, member).fetchJoin()
                .innerJoin(member.roles, role1).fetchJoin()
                .innerJoin(member.account, account).fetchJoin()
                .innerJoin(member.project, project).fetchJoin()
                .innerJoin(assignee.issue, issue).fetchJoin()
                .leftJoin(issue.api, api).fetchJoin()
                .where(project.id.eq(projectId))
                .where(issue.id.eq(issueId))
                .where(account.id.eq(accountId))
                .fetchOne());
    }

    private BooleanExpression eqAccountId(Long accountId) {
        return accountId == null ? null : account.id.eq(accountId);
    }

    @Override
    public Optional<Assignee> findByAccountIdAndProjectId(Long accountId, Long projectId) {
        return Optional.of(queryFactory.select(assignee)
                .from(assignee)
                .join(assignee.member, member)
                .join(assignee.issue, issue)
                .where(member.account.id.eq(accountId)
                        .and(member.project.id.eq(projectId))
                        .and(assignee.state.eq(State.NOW)))
                .fetchFirst());
    }


    public List<Assignee> findAccountIdsByIssueId(Long issueId) {
        return queryFactory.select(assignee)
                .from(assignee)
                .innerJoin(assignee.member, member).fetchJoin()
                .innerJoin(member.account, account).fetchJoin()
                .innerJoin(assignee.issue, issue).fetchJoin()
                .leftJoin(issue.api, api).fetchJoin()
                .leftJoin(member.roles, role1).fetchJoin()
                .where(issue.id.eq(issueId))
                .fetch();
    }

    @Override
    public void save(Assignee assignee) {
        assigneeJpaRepository.save(assignee);
    }

    @Override
    public void delete(Assignee assignee) {
        assigneeJpaRepository.delete(assignee);
    }
}
