package com.sharep.be.modules.exception;

public class IssueNotFoundException extends RuntimeException {

    public IssueNotFoundException() {
        super("이슈를 찾을 수 없습니다.");
    }
}
