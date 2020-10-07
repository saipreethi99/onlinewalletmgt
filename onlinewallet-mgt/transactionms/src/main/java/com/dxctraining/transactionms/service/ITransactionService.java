package com.dxctraining.transactionms.service;

import java.util.List;

import com.dxctraining.transactionms.entities.TransactionEntry;

public interface ITransactionService {
    TransactionEntry create(Long accountId, double amount, double newBalance, String type);

    TransactionEntry findById(Long id);

    List<TransactionEntry> findByAccountId(Long accountId);

}
