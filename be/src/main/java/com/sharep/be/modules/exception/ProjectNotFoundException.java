package com.sharep.be.modules.exception;

public class ProjectNotFoundException extends RuntimeException {

    public ProjectNotFoundException() {
        super("프로젝트를 찾을 수 없습니다.");
    }
}
