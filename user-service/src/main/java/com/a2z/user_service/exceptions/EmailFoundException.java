package com.a2z.user_service.exceptions;

import jakarta.ws.rs.NotFoundException;

public class EmailFoundException extends NotFoundException {
    public EmailFoundException(String message){super(message);}

}
