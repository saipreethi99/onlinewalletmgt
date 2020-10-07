package com.dxctraining.accountms.entities;


import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "accounts")//table name
public class Account {

    @Id
    @GeneratedValue
    private Long accountId;

    private Double accountBalance;

    private AccountStatus status;

    private Long userId;

    public Account() {

    }

    public Account(Long id, Double balance, AccountStatus status) {
       this.accountId=id;
       this.accountBalance=balance;
       this.status=status;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }



    public AccountStatus getStatus() {
        return status;
    }

    public void setStatus(AccountStatus status) {
        this.status = status;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(Double accountBalance) {
        this.accountBalance = accountBalance;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Account that = (Account) o;
        return accountId.equals(that.accountId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(accountId);
    }
}
