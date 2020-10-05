package com.dxctraining.accountms.service;

import com.dxctraining.accountms.dao.IAccountDao;
import com.dxctraining.accountms.entities.Account;
import com.dxctraining.accountms.entities.AccountStatus;
import com.dxctraining.accountms.exceptions.AccountNotFoundException;
import com.dxctraining.accountms.exceptions.InsufficientBalanceException;
import com.dxctraining.accountms.exceptions.InvalidArgumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

// transactional will inform spring that it has to open transaction at every method in this class
@Transactional
@Service
public class AccountServiceImpl implements IAccountService {

    @Autowired
    private IAccountDao dao;

    @Override
    public Account findAccountById(Long id) {
       Optional<Account> optional = dao.findById(id);
       if(!optional.isPresent()){
           throw new AccountNotFoundException("account not found for id="+id);
       }
        return optional.get();
    }


    @Override
    public Account create(Account account) {
        validate(account);
        account.setStatus(AccountStatus.ACTIVE);
        account =dao.save(account);
        return account;
    }

    @Override
    public Account credit(Long accountId, double amount){
       Account account= findAccountById(accountId);
       Double balance=account.getAccountBalance();
       double doubleValue=balance.doubleValue();
       doubleValue=doubleValue+amount;
       account.setAccountBalance(doubleValue);
       return account;
    }

    @Override
    public Account debit(Long accountId, double amount){
        Account account= findAccountById(accountId);
        Double balance=account.getAccountBalance();
        double doubleValue=balance.doubleValue();
        if(doubleValue<amount){
         throw new InsufficientBalanceException("balnace is lower than amount to be debited");
        }
        doubleValue=doubleValue-amount;
        account.setAccountBalance(doubleValue);
        return account;
    }

    @Override
    public void transfer(Long creditedAccountId,Long debitedAccountId, double amount){
        debit(debitedAccountId, amount);
        credit(creditedAccountId,amount);
    }

    public void validate(Account arg){
        if(arg==null){
            throw new InvalidArgumentException("argument is null");
        }
    }



}
