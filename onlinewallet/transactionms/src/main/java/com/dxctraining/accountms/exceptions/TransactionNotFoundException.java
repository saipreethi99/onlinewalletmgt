package com.dxctraining.accountms.exceptions;

public class TransactionNotFoundException extends RuntimeException{

    public TransactionNotFoundException(String msg){
        super(msg);
    }
}
