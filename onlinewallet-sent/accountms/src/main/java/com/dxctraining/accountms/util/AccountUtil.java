package com.dxctraining.accountms.util;

import com.dxctraining.accountms.dto.AccountDetails;
import com.dxctraining.accountms.entities.Account;
import org.springframework.stereotype.Component;

@Component
public class AccountUtil {


     public AccountDetails toAccountDetails(Account account){
         AccountDetails details=new AccountDetails();
         details.setAccountBalance(account.getAccountBalance());
         details.setAccountId(account.getAccountId());
         details.setStatus(account.getStatus().name());
         details.setUserId(account.getUserId());
         return details;
     }

}
