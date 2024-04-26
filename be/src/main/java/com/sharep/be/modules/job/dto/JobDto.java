package com.sharep.be.modules.job.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class JobDto {

    @NoArgsConstructor
    @Setter
    public static class JobCreateRequestDto{

        @Size(min = 1, max = 100)
        private String name;

        @Size(max = 255)
        private String description;
    }

}
