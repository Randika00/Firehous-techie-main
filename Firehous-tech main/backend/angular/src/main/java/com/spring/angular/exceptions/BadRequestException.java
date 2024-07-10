package com.spring.angular.exceptions;

import jakarta.transaction.SystemException;

public class BadRequestException extends SystemException {
    public BadRequestException (String msg){
        super(msg);
    }
}
