package com.sharep.be.modules.notification.service;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface ProjectIdEmitterRepository {

    void save(Long memberId, SseEmitter emitter);

    void deleteById(Long memberId);

    SseEmitter get(Long memberId);
}
