package com.dxctraining.accountms.service;

import com.dxctraining.accountms.entities.TransactionEntry;

import java.util.List;

public interface ITransactionService {
    TransactionEntry create(Long accountId, double amount, double newBalance, String type);

    TransactionEntry findById(Long id);

    List<TransactionEntry> findByAccountId(Long accountId);

}
