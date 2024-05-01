package com.sharep.be.modules.issue;

import jakarta.validation.constraints.NotBlank;

public record IssueDelete(@NotBlank Long id) {

}
