package com.sharep.be.modules.job;

import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record JobResponse(Long id, String name, String description, LocalDateTime createdAt,
                          String imageUrl) {


}
