package com.sharep.be.modules.exception;

public class MemberNotFoundException extends RuntimeException {

    public MemberNotFoundException() {
        super("존재하지 않는 팀원입니다.");
    }
}
