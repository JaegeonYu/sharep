package com.sharep.be.modules.issue.controller;

import com.sharep.be.modules.issue.IssueRequest.IssueCreate;
import com.sharep.be.modules.issue.IssueRequest.IssueUpdate;
import com.sharep.be.modules.issue.IssueResponse;
import com.sharep.be.modules.issue.IssueResponse.IssueCreated;
import com.sharep.be.modules.issue.IssueResponse.SimpleIssueResponse;
import com.sharep.be.modules.issue.service.IssueService;
import com.sharep.be.modules.issue.type.DataType;
import com.sharep.be.modules.issue.type.IssueType;
import com.sharep.be.modules.security.JwtAuthentication;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects/{projectId}/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @GetMapping("/{issueId}")
    public ResponseEntity<IssueResponse> getIssue(@PathVariable Long issueId,
            @PathVariable Long projectId) {

        return ResponseEntity.ok(IssueResponse.from(issueService.getIssue(issueId)));
    }

    @GetMapping
    public ResponseEntity<List<?>> getIssues(
            @RequestParam(required = false) IssueType issueType,
            @RequestParam(required = false) Long accountId,
            @RequestParam(defaultValue = "SIMPLE") DataType dataType,
            @PathVariable Long projectId,
            @AuthenticationPrincipal JwtAuthentication jwtAuthentication) {

        return ResponseEntity.ok(
                issueService.getIssues(projectId, accountId, issueType, dataType).stream()
                        .map(dataType.equals(DataType.DETAIL) ? IssueResponse::from
                                : SimpleIssueResponse::from).toList());
    }

    @PostMapping
    private ResponseEntity<IssueCreated> createIssue(@PathVariable Long projectId,
            @RequestBody @Valid IssueCreate issueCreate,
            @AuthenticationPrincipal JwtAuthentication jwtAuthentication) {

        return ResponseEntity.status(HttpStatus.CREATED).body(IssueCreated.from(
                issueService.createIssue(projectId, jwtAuthentication.id, issueCreate)));
    }


    @PutMapping("/{issueId}")
    private ResponseEntity<Void> updateIssue(@PathVariable Long projectId,
            @PathVariable Long issueId, @RequestBody IssueUpdate issueUpdate,
            @AuthenticationPrincipal JwtAuthentication jwtAuthentication) {
        issueService.updateIssue(issueId, jwtAuthentication.id, projectId, issueUpdate);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{issueId}")
    private ResponseEntity<Void> deleteIssue(@PathVariable Long projectId,
            @PathVariable Long issueId,
            @AuthenticationPrincipal JwtAuthentication jwtAuthentication) {

        issueService.deleteIssue(issueId, jwtAuthentication.id, projectId);
        return ResponseEntity.noContent().build();
    }

}
