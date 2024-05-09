package com.example.webfluxwebsocketchat;

import reactor.core.publisher.Mono;

public class JustTest {
    public static void main(String[] args) {
        String text = "STRING111";
        Mono<String> mono = Mono.just(text); //단지!
        mono.subscribe( str->{ //구독!
            System.out.println(str);
        });
    }
}