package com.sharep.be.modules.gpt;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sharep.be.modules.gpt.dto.GptCreate;
import com.sharep.be.modules.gpt.dto.GptResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.nio.charset.StandardCharsets;

@Service
@Slf4j
public class GptService {

    private final String model;
    private final String prompt;
    private final Integer maxToken;

    private final String secretKey;
    private final String url;

    private final ObjectMapper objectMapper;

    public GptService(@Value("${openai.model}") String model,
            @Value("${openai.prompt}") String prompt,
            @Value("${openai.max_token}") Integer maxToken,
            @Value("${openai.secret_key}") String secretKey,
            @Value("${openai.url}") String url, ObjectMapper objectMapper) {
        this.model = model;
        this.prompt = prompt;
        this.maxToken = maxToken;
        this.secretKey = secretKey;
        this.url = url;
        this.objectMapper = objectMapper;
    }

    public String queryGpt(String input) {
        String query = makeQuery(input);

        RestClient restClient = RestClient.create();
        ResponseEntity<GptResponse> responseQuery = restClient.post()
                .uri(url)
                .header("Authorization", "Bearer " + secretKey)
                .header("Content-Type", "application/json")
                .body(query)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    String responseBody = new String(response.getBody().readAllBytes(),
                            StandardCharsets.UTF_8);
                    throw new RuntimeException(responseBody);
                })
                .toEntity(GptResponse.class);
        log.info("gpt response : {}", responseQuery.getBody());
        return extractResult(responseQuery);
    }

    private String extractResult(ResponseEntity<GptResponse> responseQuery) {
        String content = responseQuery.getBody().choices().get(0).message().content();

        try {
            return objectMapper.readTree(content).path("result").asText();
        } catch (JsonProcessingException e) {
            log.warn("JSON processing error: {}", e.getMessage());
            return "";
        }
    }

    private String makeQuery(String input) {
        GptCreate gptCreate = new GptCreate(model, prompt + input);
        try {
            String query = objectMapper.writeValueAsString(gptCreate);
            log.info(" query : {}", query);
            return query;
        } catch (JsonProcessingException e) {
            log.warn("JSON processing error: {}", e.getMessage());
            return "";
        }
    }
}
