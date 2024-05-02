package com.sharep.be.modules.api;

import com.sharep.be.modules.api.type.MethodType;

public record ApiRequest(Long id) {

    public record ApiUpdate(String request, String response, String url, MethodType method) {

    }

}
