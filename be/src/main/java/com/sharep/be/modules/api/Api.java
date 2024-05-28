package com.sharep.be.modules.api;

import com.sharep.be.modules.api.type.MethodType;
import com.sharep.be.modules.issue.Issue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Api {

    @Id
    private Long id;

    private String request;

    private String response;

    private String url;

    @Enumerated(EnumType.STRING)
    private MethodType method;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "id", referencedColumnName = "id")
    private Issue issue;

    @Builder
    public Api(Long id, String request, String response, String url, MethodType method,
            Issue issue) {
        this.id = id;
        this.request = request;
        this.response = response;
        this.url = url;
        this.method = method;
        this.issue = issue;
    }
}

/*
    NOTE:
      API가 관계의 주인이 되면 Issue를 조회할 때 API가 즉시 로딩되지 않음
      API에서만 Issue를 참조할 수 있게 하면(Issue에서 api의 참조를 삭제)
      API가 필요한 Issue는 API로 쿼리하고 API가 필요없는 Issue는 Issue 테이블에서 쿼리하면 된다.
 */
