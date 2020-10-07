package com.dxctraining.usermgt.service;

import java.util.List;

import com.dxctraining.usermgt.entities.User;

public interface IUserService {
    User addUser(User user);

    User updateUser(User user);

    User findByUserId(Long userId);

    List<User> findAll();

    void deleteUser(Long userId);

    User findByUsername(String username);

}