package com.sharep.be.modules.job.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record JobCreateRequest(

        @NotBlank
        @Size(min = 1, max = 100)
        String name,

        @NotNull
        @Size(max = 255)
        String description
) {

}