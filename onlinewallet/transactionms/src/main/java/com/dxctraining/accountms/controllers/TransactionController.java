package com.dxctraining.accountms.controllers;

import com.dxctraining.accountms.dto.CreateTransactionRecordRequest;
import com.dxctraining.accountms.dto.TransactionDetails;
import com.dxctraining.accountms.entities.TransactionEntry;
import com.dxctraining.accountms.service.ITransactionService;
import com.dxctraining.accountms.util.TransactionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/transactions")
@RestController
public class TransactionController {

    @Autowired
    private ITransactionService transactionService;

    @Autowired
    private TransactionUtil transactionUtil;

    @PostMapping("/add")
    public TransactionDetails create(@RequestBody CreateTransactionRecordRequest request){
        TransactionEntry transaction= transactionService.create(request.getAccountId(),request.getAmount(),request.getNewBalance(),request.getType());
        TransactionDetails transactionDetails=transactionUtil.toTransactionDetails(transaction);
        return transactionDetails;
    }

    @GetMapping("/by/accountid/{accountId}")
    public List<TransactionDetails>findTransactionsByAccountId(@PathVariable("accountId") Long accountId){
       List<TransactionEntry>transactions= transactionService.findByAccountId(accountId);
       List<TransactionDetails>response=new ArrayList<>();
       for (TransactionEntry transaction:transactions){
           TransactionDetails details=transactionUtil.toTransactionDetails(transaction);
           response.add(details);
       }
       return response;
    }


}
