package com.sharep.be.modules.gpt.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

public record GptResponse(
        String id,
        String object,
        Long created,
        String model,
        List<Choice> choices,
        Usage usage,
        @JsonProperty("system_fingerprint") String systemFingerprint
) {
    public record Choice(
            int index,
            Message message,
            Object logprobs,
            @JsonProperty("finish_reason") String finishReason
    ) {}

    public record Message(
            String role,
            String content
    ) {}

    public record Usage(
            @JsonProperty("prompt_tokens") int promptTokens,
            @JsonProperty("completion_tokens") int completionTokens,
            @JsonProperty("total_tokens") int totalTokens
    ) {}
}
