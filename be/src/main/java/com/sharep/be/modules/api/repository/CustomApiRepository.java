package com.sharep.be.modules.api.repository;

import com.sharep.be.modules.api.Api;
import java.util.List;

public interface CustomApiRepository {

    List<Api> findApisByProjectId(Long projectId);
}
