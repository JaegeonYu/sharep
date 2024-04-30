package com.sharep.be.modules.assignee;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sharep.be.modules.job.Job;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AssigneeRepositoryCustomImpl implements AssigneeRepositoryCustom{

    private final JPAQueryFactory queryFactory;


    @Override
    public List<Assignee> findAllByProject(Long projectId) {
        return null;
    }
}
