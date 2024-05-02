package com.sharep.be.modules.api.service;

import com.sharep.be.modules.api.ApiRequest.ApiUpdate;

public interface ApiService {

    void updateApi(Long apiId, ApiUpdate apiUpdate);

    void deleteApi(Long apiId);
}
