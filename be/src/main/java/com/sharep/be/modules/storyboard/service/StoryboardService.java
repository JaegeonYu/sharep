package com.sharep.be.modules.storyboard.service;

import com.sharep.be.modules.storyboard.Storyboard;
import com.sharep.be.modules.storyboard.StoryboardRequest.IssueConnect;

public interface StoryboardService {

    Storyboard connectIssue(IssueConnect issueConnect);

    void disconnectIssue(Long connectionId);
}
