package com.dxctraining.accountms.util;

import com.dxctraining.accountms.dto.TransactionDetails;
import com.dxctraining.accountms.entities.TransactionEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TransactionUtil {

    @Autowired
    private DateUtil dateUtil;

    public TransactionDetails toTransactionDetails(TransactionEntry transaction){
        TransactionDetails details=new TransactionDetails();
        details.setAccountId(transaction.getAccountId());
        details.setAmount(transaction.getAmount());
        details.setNewBalance(transaction.getNewBalance());
        details.setTransactionId(transaction.getTransactionId());
        details.setType(transaction.getType());
        long millis=dateUtil.toMillis(transaction.getDateTime());
        details.setTransactionTimeMillis(millis);
        return details;
    }
}
