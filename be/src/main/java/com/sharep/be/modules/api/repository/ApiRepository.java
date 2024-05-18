package com.sharep.be.modules.api.repository;

import com.sharep.be.modules.api.Api;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApiRepository extends JpaRepository<Api, Long>, CustomApiRepository {

}
