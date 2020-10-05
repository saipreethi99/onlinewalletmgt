package com.dxctraining.accountms.dao;


import com.dxctraining.accountms.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IAccountDao extends JpaRepository<Account,Long> {

}
