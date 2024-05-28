package com.sharep.be.modules.api;

import com.sharep.be.modules.api.type.MethodType;
import com.sharep.be.modules.issue.Issue;
import jakarta.validation.constraints.NotNull;

public record ApiRequest(Long id, String request, String response, String url,
                         MethodType method) {

    public record ApiCreate(@NotNull Long issueId, String request, String response, String url,
                            MethodType method) {

        public Api toEntityWith(Issue issue) {
            return Api.builder()
                    .id(issueId)
                    .request(request)
                    .response(response)
                    .url(url)
                    .method(method)
                    .issue(issue)
                    .build();
        }
    }

    public record ApiUpdate(String request, String response, String url,
                            MethodType method) {

        public Api toEntityWith(Api api) {
            return Api.builder()
                    .id(api.getId())
                    .request(request)
                    .response(response)
                    .url(url)
                    .method(method)
                    .issue(api.getIssue())
                    .build();
        }

    }
}
