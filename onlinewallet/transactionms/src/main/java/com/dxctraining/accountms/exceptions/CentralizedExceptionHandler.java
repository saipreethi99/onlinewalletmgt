package com.dxctraining.accountms.exceptions;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CentralizedExceptionHandler {

    @ExceptionHandler(TransactionNotFoundException.class)
    public String handleTransactionNotFound(TransactionNotFoundException e){
        return e.getMessage();
    }

}
