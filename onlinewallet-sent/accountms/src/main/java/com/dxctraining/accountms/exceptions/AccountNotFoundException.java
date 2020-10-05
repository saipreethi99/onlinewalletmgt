package com.dxctraining.accountms.exceptions;

public class AccountNotFoundException extends RuntimeException{

    public AccountNotFoundException(String msg){
        super(msg);
    }

}
