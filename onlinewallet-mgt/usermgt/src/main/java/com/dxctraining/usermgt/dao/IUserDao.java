package com.dxctraining.usermgt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dxctraining.usermgt.entities.User;

public interface IUserDao extends JpaRepository<User,Long> {

    User findUserByUserName(String username);
}
