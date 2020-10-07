package com.dxctraining.transactionms.exceptions;

public class TransactionNotFoundException extends RuntimeException{

    public TransactionNotFoundException(String msg){
        super(msg);
    }
}
