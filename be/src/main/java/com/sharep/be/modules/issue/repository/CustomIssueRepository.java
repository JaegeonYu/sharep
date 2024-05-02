package com.sharep.be.modules.issue.repository;

import com.sharep.be.modules.issue.dto.FeatureDto;
import com.sharep.be.modules.issue.type.IssueType;
import java.util.List;
import java.util.Optional;

public interface CustomIssueRepository {

    Optional<List<FeatureDto>> findFeatureIssuesByProjectIdAndIssueType(Long projectId,
            IssueType issueType);
}
