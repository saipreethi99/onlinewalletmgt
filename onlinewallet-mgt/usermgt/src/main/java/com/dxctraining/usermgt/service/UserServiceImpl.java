package com.dxctraining.usermgt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxctraining.usermgt.dao.*;
import com.dxctraining.usermgt.entities.*;
import com.dxctraining.usermgt.exceptions.*;

import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserDao userDao;

    @Override
    public User addUser(User user) {
        validate(user);
         user = userDao.save(user);
        return user;
    }


    @Override
    public User updateUser(User user) {
        validate(user);
        if(!userDao.existsById(user.getUserId())){
            throw new UserNotFoundException("user not found for id="+user.getUserId());
        }
        user = userDao.save(user);
        return user;

    }

    public void validate(User user) {
        if (user == null) {
            throw new InvalidArgumentException("user can not be null");
        }
    }

    @Override
    public User findByUserId(Long userId) {
        Optional<User> optional = userDao.findById(userId);
        if (!optional.isPresent()) {
            throw new UserNotFoundException("user not found for id=" + userId);
        }
        User user = optional.get();
        return user;
    }

    @Override
    public User findByUsername(String username) {
        User user = userDao.findUserByUserName(username);
        return user;
    }

    @Override
    public List<User> findAll() {
        List<User> users = userDao.findAll();
        return users;
    }

    @Override
    public void deleteUser(Long userId) {
        userDao.deleteById(userId);

    }

}