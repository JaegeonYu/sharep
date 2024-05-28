package com.sharep.be.modules.issue.repository;

import static com.sharep.be.modules.account.QAccount.account;
import static com.sharep.be.modules.api.QApi.api;
import static com.sharep.be.modules.assignee.domain.QAssignee.assignee;
import static com.sharep.be.modules.issue.QIssue.issue;
import static com.sharep.be.modules.job.domain.QJob.job;
import static com.sharep.be.modules.member.QMember.member;
import static com.sharep.be.modules.project.QProject.project;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Path;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.assignee.domain.QAssignee;
import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.QIssue;
import com.sharep.be.modules.issue.type.DataType;
import com.sharep.be.modules.issue.type.IssueType;
import com.sharep.be.modules.member.QMember;
import com.sharep.be.modules.storyboard.QStoryboard;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CustomIssueRepositoryImpl implements CustomIssueRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public Optional<Issue> findByIssueId(Long id, DataType dataType) {

        BooleanBuilder condition = new BooleanBuilder();
        condition.and(issue.id.eq(id));

        JPAQuery<Issue> query = DataType.SIMPLE.equals(dataType) ?
                simpleIssueQuery(condition) : detailIssueQuery(condition);

        return Optional.ofNullable(query.fetchOne());
    }

    @Override
    public List<Issue> findAllByProjectIdAndAccountIdAndIssueType(
            Long projectId, Long accountId, IssueType issueType, DataType dataType) {

        BooleanBuilder condition = new BooleanBuilder();
        condition.and(project.id.eq(projectId));

        if (issueType != null) {
            condition.and(issue.type.eq(issueType));
        }

        if (accountId != null) {
            condition.and(issue.assignees.any().member.account.id.eq(accountId));
        }

        JPAQuery<Issue> query = DataType.SIMPLE.equals(dataType) ?
                simpleIssueQuery(condition) : detailIssueQuery(condition);

        return query.fetch();
    }

    private JPAQuery<Issue> detailIssueQuery(BooleanBuilder condition) {
        QStoryboard featureStoryboard = new QStoryboard("featureStoryboard");
        QStoryboard screenStoryboard = new QStoryboard("screenStoryboard");
        QIssue screenIssue = new QIssue("screenIssue");
        QIssue featureIssue = new QIssue("featureIssue");

        QAssignee screenIssueAssignee = new QAssignee("screenIssueAssignee");
        QAssignee featureIssueAssignee = new QAssignee("featureIssueAssignee");
        QMember screenMember = new QMember("screenMember");
        QMember featureMember = new QMember("featureMember");

        return simpleIssueQuery(null)
                .leftJoin(issue.featureStoryboards, featureStoryboard).fetchJoin()
                .leftJoin(issue.screenStoryboards, screenStoryboard).fetchJoin()
                .leftJoin(featureStoryboard.screenIssue, screenIssue).fetchJoin()
                .leftJoin(screenStoryboard.featureIssue, featureIssue).fetchJoin()
                .leftJoin(screenIssue.api).fetchJoin()
                .leftJoin(featureIssue.api).fetchJoin()
                .leftJoin(screenIssue.assignees, screenIssueAssignee).fetchJoin()
                .leftJoin(featureIssue.assignees, featureIssueAssignee).fetchJoin()
                .leftJoin(screenIssueAssignee.member, screenMember).fetchJoin()
                .leftJoin(featureIssueAssignee.member, featureMember).fetchJoin()
                .leftJoin(screenMember.account).fetchJoin()
                .leftJoin(featureMember.account).fetchJoin()
                .leftJoin(screenMember.roles).fetchJoin()
                .leftJoin(featureMember.roles).fetchJoin()
                .leftJoin(screenIssue.jobs).fetchJoin()
                .leftJoin(featureIssue.jobs).fetchJoin()
                .where(condition);
    }

    private JPAQuery<Issue> simpleIssueQuery(BooleanBuilder condition) {
        return queryFactory
                .select(issue)
                .from(issue)
                .leftJoin(issue.assignees, assignee).fetchJoin()
                .leftJoin(assignee.member, member).fetchJoin()
                .leftJoin(member.account, account).fetchJoin()
                .leftJoin(member.roles).fetchJoin()
                .leftJoin(issue.api, api).fetchJoin()
                .leftJoin(issue.jobs, job).fetchJoin()
                .innerJoin(issue.project, project)
                .where(condition);
    }


}

