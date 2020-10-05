package com.dxctraining.accountms.exceptions;

public class DepartmentNotFoundException extends RuntimeException{

    public DepartmentNotFoundException(String msg){
        super(msg);
    }

}
