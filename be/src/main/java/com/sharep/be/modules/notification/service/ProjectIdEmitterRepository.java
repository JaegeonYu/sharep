package com.sharep.be.modules.notification.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface ProjectIdEmitterRepository {

    void save(Long id, SseEmitter emitter);

    void deleteById(Long id);

    SseEmitter get(Long id);
}
