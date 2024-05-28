package com.sharep.be.modules.exception;

import com.sharep.be.modules.mattermost.NotificationManager;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class AdviceController {
    private final NotificationManager notificationManager;
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> error(Exception e, HttpServletRequest req) {
        log.error("error log : {}", e.getMessage());
        notificationManager.sendNotification(e, req.getRequestURI(), getParams(req));
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(e.getMessage());
    }

    private String getParams(HttpServletRequest req) {
        StringBuilder params = new StringBuilder();
        Enumeration<String> keys = req.getParameterNames();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            params.append("- ").append(key).append(" : ").append(req.getParameter(key)).append("/n");
        }

        return params.toString();
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> errorValid(Exception e, HttpServletRequest req, BindingResult result) {
        log.error("error log : {}", e.getMessage());
        notificationManager.sendNotification(e, req.getRequestURI(), getParams(req));

        List<String> errorMessages = result.getAllErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();
        StringBuilder errorMessage = new StringBuilder();

        errorMessages.forEach(ee -> {
            errorMessage.append(ee);
            errorMessage.append("\n");
        });
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(errorMessage.toString());
    }
}
