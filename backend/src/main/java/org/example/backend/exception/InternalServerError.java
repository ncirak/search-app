package org.example.backend.exception;

public class InternalServerError extends RuntimeException {

    public InternalServerError(String message, final Throwable cause) {
        super(message, cause);
    }
}
