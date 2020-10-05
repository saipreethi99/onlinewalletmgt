package com.dxctraining.accountms.service;

import com.dxctraining.accountms.dao.ITransactionDao;
import com.dxctraining.accountms.entities.TransactionEntry;
import com.dxctraining.accountms.exceptions.TransactionNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class TransactionServiceImpl implements ITransactionService{

    @Autowired
    private ITransactionDao transactionDao;

    @Override
    public TransactionEntry create(Long accountId, double amount, double newBalance, String type){
        TransactionEntry transaction=new TransactionEntry();
        transaction.setAccountId(accountId);
        transaction.setAmount(amount);
        transaction.setNewBalance(newBalance);
        transaction.setType(type);
        transaction=transactionDao.save(transaction);
        transaction.setDateTime(LocalDateTime.now());
        return transaction;
    }

    @Override
    public TransactionEntry findById(Long id) {
        Optional<TransactionEntry>optional=transactionDao.findById(id);
        if(!optional.isPresent()){
            throw new TransactionNotFoundException("transaction not found for id="+id);
        }
        return null;
    }

    public List<TransactionEntry> findByAccountId(Long accountId){
      List<TransactionEntry>transactions=  transactionDao.findByAccountId(accountId);
      return transactions;
    }

}
