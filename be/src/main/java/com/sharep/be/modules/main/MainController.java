package com.sharep.be.modules.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public String healthCheck(){
        return "hello";
    }
}
