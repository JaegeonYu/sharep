package com.sharep.be.modules.job.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class JobCreateRequest {

        @NotBlank
        @Size(min = 1, max = 100)
        private String name;

        @NotNull
        @Size(max = 255)
        private String description;

        @Min(1)
        private Long issueId;
    }