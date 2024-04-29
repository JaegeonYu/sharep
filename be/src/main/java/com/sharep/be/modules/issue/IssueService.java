package com.sharep.be.modules.issue;

import com.sharep.be.modules.issue.IssueDto.IssueRequestDto;
import com.sharep.be.modules.issue.IssueDto.IssueResponseDto;
import java.util.List;

public interface IssueService {

    void createIssue(IssueRequestDto issueRequestDto);

    List<IssueResponseDto> getIssues(Long projectId);

    IssueResponseDto getIssue(Long id);

    IssueResponseDto updateIssue(IssueRequestDto issueRequestDto);

    IssueResponseDto deleteIssue(IssueRequestDto issueRequestDto);

}
