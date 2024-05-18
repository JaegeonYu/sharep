package com.sharep.be.modules.exception;

public class StoryboardNotFoundException extends RuntimeException {

    public StoryboardNotFoundException() {
        super("연결된 이슈를 찾을 수 없습니다.");
    }
}
