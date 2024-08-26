package org.example.backend.model.resource;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class CustomErrorResponse {

    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
    private String description;
}
