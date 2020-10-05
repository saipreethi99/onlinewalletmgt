package com.dxctraining.accountms.service;


import com.dxctraining.accountms.entities.Account;

import java.util.List;

public interface IAccountService {

    Account findAccountById(Long id);

    Account create(Account account);

    Account credit(Long accountId, double amount);

    Account debit(Long accountId, double amount);

    void transfer(Long creditedAccountId,Long debitedAccountId, double amount);
}
