package com.sharep.be.modules.exception;

public class ApiNotFoundException extends RuntimeException {

    public ApiNotFoundException() {
        super("API를 찾을 수 없습니다.");
    }
}
