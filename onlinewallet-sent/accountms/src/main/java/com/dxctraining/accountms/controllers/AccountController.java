package com.dxctraining.accountms.controllers;

import com.dxctraining.accountms.dto.*;
import com.dxctraining.accountms.entities.Account;
import com.dxctraining.accountms.service.IAccountService;
import com.dxctraining.accountms.util.AccountUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@Validated
@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private IAccountService service;

    @Autowired
    private AccountUtil accountUtil;

    @Autowired
    private RestTemplate restTemplate;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public AccountDetails createAccount(@RequestBody CreateAccountRequest request){
        Account account=new Account();
        account.setAccountBalance(request.getAccountBalance());
        account.setUserId(request.getUserId());
        account=service.create(account);
        AccountDetails details=accountUtil.toAccountDetails(account);
        return details;
    }

    @GetMapping("/by/accountid/{accountId}")
    public  AccountDetails findAccountById(@PathVariable("accountId") Long accountId){
    Account account=service.findAccountById(accountId);
    AccountDetails details=accountUtil.toAccountDetails(account);
    return details; 
    }

    @PutMapping("/{accountId}/credit")
    public AccountDetails credit(@RequestBody CreditRequest request){
        Account account=service.credit(request.getAccountId(),request.getAmount());
        AccountDetails details=accountUtil.toAccountDetails(account);
        createTransactionRecord(account.getAccountId(),request.getAmount(),account.getAccountBalance(),"credit");
        return details;
    }

    @PutMapping("/{accountId}/debit")
    public AccountDetails debit(@RequestBody CreditRequest request){
        Account account=service.debit(request.getAccountId(),request.getAmount());
        AccountDetails details=accountUtil.toAccountDetails(account);
        createTransactionRecord(account.getAccountId(),request.getAmount(),account.getAccountBalance(),"debit");
        return details;
    }

    @PutMapping("/{accountId}/transfer")
    public AccountDetails transfer(@RequestBody TransferRequest request){
        service.transfer(request.getCreditedAccountId(),request.getDebitedAccountId(),request.getAmount());
        Account creditedAccount=service.findAccountById(request.getCreditedAccountId());
        Account debitedAccount=service.findAccountById(request.getDebitedAccountId());
        AccountDetails details=accountUtil.toAccountDetails(creditedAccount);
        createTransactionRecord(request.getCreditedAccountId(),request.getAmount(),creditedAccount.getAccountBalance(),"credit");
        createTransactionRecord(request.getDebitedAccountId(),request.getAmount(),debitedAccount.getAccountBalance(),"debit");
        return details;
    }


    public void createTransactionRecord(Long accountId, double amount, double newBalance, String type){
        String url="http://localhost:8586/transactions/add";
        CreateTransactionRecordRequest request=new CreateTransactionRecordRequest();
        request.setAccountId(accountId);
        request.setAmount(amount);
        request.setNewBalance(newBalance);
        request.setType(type);
        restTemplate.postForObject(url,request,TransactionDetails.class);

    }

}




