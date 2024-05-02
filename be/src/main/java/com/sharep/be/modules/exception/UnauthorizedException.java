package com.sharep.be.modules.exception;

public class UnauthorizedException extends RuntimeException {

    public UnauthorizedException() {
        super("권한이 없습니다.");

    }
}
