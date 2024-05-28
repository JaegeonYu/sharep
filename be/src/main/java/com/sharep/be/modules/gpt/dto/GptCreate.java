package com.sharep.be.modules.gpt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class GptCreate {
    private String model;
    private Message[] messages;



    public GptCreate(String model, String content) {
        this.model = model;
        this.messages = new Message[1];
        this.messages[0] = new Message("user", content);
    }

    @NoArgsConstructor
    @Setter
    @Getter
    class Message{
        String role;
        String content;

        public Message(String role, String content) {
            this.role = role;
            this.content = content;
        }
    }
}
