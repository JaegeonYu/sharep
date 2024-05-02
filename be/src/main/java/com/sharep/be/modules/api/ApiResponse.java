package com.sharep.be.modules.api;

import com.sharep.be.modules.api.type.MethodType;
import lombok.Builder;

@Builder
public record ApiResponse(Long id, String request, String response, String url, MethodType method) {

    @Builder
    public record ApiUpdated(Long id) {

    }
}
