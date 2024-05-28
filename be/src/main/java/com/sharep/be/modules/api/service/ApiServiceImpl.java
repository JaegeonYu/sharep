package com.sharep.be.modules.api.service;

import static org.springframework.util.Assert.isNull;
import static org.springframework.util.Assert.notNull;

import com.sharep.be.modules.api.Api;
import com.sharep.be.modules.api.ApiRequest.ApiCreate;
import com.sharep.be.modules.api.ApiRequest.ApiUpdate;
import com.sharep.be.modules.api.repository.ApiRepository;
import com.sharep.be.modules.exception.ApiNotFoundException;
import com.sharep.be.modules.exception.IssueNotFoundException;
import com.sharep.be.modules.issue.Issue;
import com.sharep.be.modules.issue.repository.IssueRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class ApiServiceImpl implements ApiService {

    private final ApiRepository apiRepository;
    private final IssueRepository issueRepository;

    @Override
    public List<Api> getApis(Long projectId) {
        return apiRepository.findApisByProjectId(projectId);
    }

    @Override
    public Api createApi(ApiCreate apiCreate) {
        Issue issue = issueRepository.findById(apiCreate.issueId())
                .orElseThrow(IssueNotFoundException::new);

        isNull(issue.getApi(), "API가 이미 존재합니다.");

        Api api = apiCreate.toEntityWith(issue);
        issue.updateApi(api);

        return api;
    }

    @Override
    public void updateApi(Long apiId, ApiUpdate apiUpdate) {
        Api api = apiRepository.findById(apiId).orElseThrow(ApiNotFoundException::new);

        apiRepository.save(apiUpdate.toEntityWith(api));
    }

    @Override
    public void deleteApi(Long apiId) {
        Issue issue = issueRepository.findById(apiId).orElseThrow(IssueNotFoundException::new);
        Api api = issue.getApi();

        notNull(api, "API가 이미 없습니다.");

        issue.updateApi(null);
    }
}
