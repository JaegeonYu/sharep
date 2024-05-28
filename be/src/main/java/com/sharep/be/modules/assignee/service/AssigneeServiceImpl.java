package com.sharep.be.modules.assignee.service;

import com.sharep.be.modules.account.Account;
import com.sharep.be.modules.assignee.controller.AssigneeService;
import com.sharep.be.modules.assignee.domain.Assignee;
import com.sharep.be.modules.assignee.domain.State;
import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.repository.IssueRepository;
import com.sharep.be.modules.member.Member;
import com.sharep.be.modules.member.MemberWithIssueResponse;
import com.sharep.be.modules.member.repository.MemberRepository;
import com.sharep.be.modules.notification.controller.NotificationService;
import com.sharep.be.modules.notification.domain.Notification;
import com.sharep.be.modules.notification.domain.NotificationMessage;
import com.sharep.be.modules.notification.service.NotificationRepository;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AssigneeServiceImpl implements AssigneeService {

    private final NotificationService notificationService;

    private final AssigneeRepository assigneeRepository;
    private final MemberRepository memberRepository;
    private final IssueRepository issueRepository;
    private final NotificationRepository notificationRepository;

    public Long update(Long accountId, Long projectId, Long issueId, State state) {

        Member member = memberRepository.findByAccountIdAndProjectId(accountId, projectId)
                .orElseThrow(() -> new RuntimeException("해당하는 구성원이 존재하지 않습니다."));

        Assignee assignee = assigneeRepository.findByMemberIdAndIssueId(member.getId(), issueId)
                .orElseThrow(() -> new RuntimeException("해당하는 담당자가 존재하지 않습니다."));

        assignee.updateState(state);

        // 작업 완료 시 다른 담당자들에게 알림 보내는 로직
        if (state == State.DONE) {
            List<Assignee> assigneesByIssue = assigneeRepository.findAccountIdsByIssueId(issueId);

            for (Assignee anotherAssignee : assigneesByIssue) {
                Member anotherMember = anotherAssignee.getMember();
                Account anotherAccount = anotherMember.getAccount();

                if (accountId.equals(anotherAccount.getId())) {
                    continue;
                }

                Notification notification = Notification.builder()
                        .assignee(assignee)
                        .isRead(false)
                        .member(anotherMember)
                        .build();

                notificationRepository.save(notification);

                notificationService.notifyAccountId(
                        anotherAccount.getId(),
                        NotificationMessage.from(notification)
                );
            }
        }

        return assignee.getId();
    }

    public Long create(Long projectId, Long issueId, Long accountId) {

        Member member = memberRepository.findByAccountIdAndProjectId(accountId, projectId)
                .orElseThrow(() -> new RuntimeException("해당하는 구성원이 존재하지 않습니다."));

        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new RuntimeException("해당하는 이슈가 존재하지 않습니다."));

        if (assigneeRepository.existsByMemberIdAndIssueId(member.getId(), issue.getId())) {
            throw new RuntimeException("이미 해당하는 이슈의 해당 구성원이 존재합니다.");
        }

        Assignee assignee = Assignee.builder()
                .member(member)
                .issue(issue)
                .state(State.YET)
                .build();

        assigneeRepository.save(assignee);

        return assignee.getId();
    }

    public Long delete(Long projectId, Long issueId, Long accountId) {

        Member member = memberRepository.findByAccountIdAndProjectId(accountId, projectId)
                .orElseThrow(() -> new RuntimeException("해당하는 구성원이 존재하지 않습니다."));

        Assignee assignee = assigneeRepository.findByMemberIdAndIssueId(member.getId(), issueId)
                .orElseThrow(() -> new RuntimeException("해당하는 담당자가 존재하지 않습니다."));

        notificationRepository.deleteAllByAssignee(assignee);

        assigneeRepository.delete(assignee);

        return assignee.getId();
    }


    @Transactional(readOnly = true)
    public List<MemberWithIssueResponse> readProjectMemberNowIssue(Long projectId) {
        List<Member> members = memberRepository.findAllWithAssigneeByProjectId(
                projectId);

        members.sort((o1, o2) -> Long.compare(o1.getAccount().getId(), o2.getAccount().getId()));
        return members.stream()
                .map(member -> {
                            List<Assignee> assignees = member.getAssignees();
                            Set<Issue> issues = new HashSet<>();

                            for (Assignee assignee : assignees) {
                                issues.add(assignee.getIssue() == null ? null : assignee.getIssue());
                            }
                            return new MemberWithIssueResponse(member, issues);
                        }
                )
                .toList();
    }

    @Transactional(readOnly = true)
    public List<MemberWithIssueResponse> readProjectMemberNowOwnIssue(Long projectId,
            Long accountId) {
        return memberRepository.findAllWithAssigneeByProjectIdAndAccountId(projectId, accountId)
                .stream()
                .map(member -> {
                            List<Assignee> assignees = member.getAssignees();
                            Set<Issue> issues = new HashSet<>();
                            for (Assignee assignee : assignees) {
                                issues.add(assignee.getIssue() == null ? null : assignee.getIssue());
                            }
                            return new MemberWithIssueResponse(member, issues);
                        }
                )
                .toList();
    }
}
