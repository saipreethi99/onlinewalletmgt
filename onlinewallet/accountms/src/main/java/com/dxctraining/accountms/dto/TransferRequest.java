package com.dxctraining.accountms.dto;

public class TransferRequest {
    private Long creditedAccountId;
    private Long debitedAccountId;
    private double amount;

    public Long getCreditedAccountId() {
        return creditedAccountId;
    }

    public void setCreditedAccountId(Long creditedAccountId) {
        this.creditedAccountId = creditedAccountId;
    }

    public Long getDebitedAccountId() {
        return debitedAccountId;
    }

    public void setDebitedAccountId(Long debitedAccountId) {
        this.debitedAccountId = debitedAccountId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
