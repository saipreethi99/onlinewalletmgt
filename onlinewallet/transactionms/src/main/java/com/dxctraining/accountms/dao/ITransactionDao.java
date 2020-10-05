package com.dxctraining.accountms.dao;

import com.dxctraining.accountms.entities.TransactionEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITransactionDao extends JpaRepository<TransactionEntry,Long> {

    List<TransactionEntry>findByAccountId(Long accountId);
}
