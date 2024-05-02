package com.sharep.be.modules.exception;

public class AssigneeNotFoundException extends RuntimeException {

    public AssigneeNotFoundException() {
        super("담당자가 존재하지 않습니다.");
    }
}
