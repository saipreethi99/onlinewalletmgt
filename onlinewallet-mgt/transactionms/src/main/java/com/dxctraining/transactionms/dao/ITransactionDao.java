package com.dxctraining.transactionms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dxctraining.transactionms.entities.TransactionEntry;

import java.util.List;

public interface ITransactionDao extends JpaRepository<TransactionEntry,Long> {

    List<TransactionEntry>findByAccountId(Long accountId);
}
