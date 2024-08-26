package org.example.backend.exception;

public class InvalidSearchTermException extends RuntimeException {
    public InvalidSearchTermException(String message, final Throwable cause) {
        super(message, cause);
    }
}
