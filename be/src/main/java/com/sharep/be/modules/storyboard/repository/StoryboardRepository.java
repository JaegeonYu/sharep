package com.sharep.be.modules.storyboard.repository;

import com.sharep.be.modules.storyboard.Storyboard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryboardRepository extends JpaRepository<Storyboard, Long> {

    Storyboard findByFeatureIssueIdAndScreenIssueId(Long featureIssueId,
            Long screenIssueId);
}
