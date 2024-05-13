package com.sharep.be.modules.project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TokenDto {
    Long projectId;
    String token;
}
