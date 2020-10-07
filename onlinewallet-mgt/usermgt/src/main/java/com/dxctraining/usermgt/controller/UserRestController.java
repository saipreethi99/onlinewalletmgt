package com.dxctraining.usermgt.controller;

import java.util.ArrayList;
import java.util.List;

import com.dxctraining.usermgt.dto.AccountDetails;
import com.dxctraining.usermgt.dto.CreateAccountRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxctraining.usermgt.dto.CreateUserRequest;
import com.dxctraining.usermgt.dto.UserDetails;
import com.dxctraining.usermgt.entities.User;
import com.dxctraining.usermgt.service.IUserService;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/users")
public class UserRestController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private IUserService service;

    @PostMapping("/add")
    public UserDetails addUser(@RequestBody CreateUserRequest requestData) {
        String userType = requestData.getRole();
        String userName = requestData.getUsername();
        String password = requestData.getPassword();
        String userPhone = requestData.getPhone();
        System.out.println("role=" + userType + "username=" + userName + " password=" + password + " phone=" + userPhone);
        User user = new User(userType, userName, userPhone, password);
        user = service.addUser(user);
        AccountDetails accountDetails=createAccount(user);
        user.setAccountId(accountDetails.getAccountId());
        user=service.updateUser(user);
        UserDetails response = toDto(user);
        return response;
    }

    @GetMapping("/by/id/{userId}")
    public UserDetails findByUserId(@PathVariable("userId") Long userId) {
        User user = service.findByUserId(userId);
        UserDetails response = toDto(user);
        return response;
    }

    @GetMapping("/by/username/{userName}")
    public UserDetails findByUsername(@PathVariable("userName") String userName) {
        User user = service.findByUsername(userName);
        UserDetails response = toDto(user);
        return response;
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        service.deleteUser(userId);
    }

    public UserDetails toDto(User user) {
        UserDetails dto = new UserDetails();
        dto.setRole(user.getUserType());
        dto.setUsername(user.getUserName());
        dto.setPhone(user.getUserPhone());
        dto.setPassword(user.getPassword());
        dto.setId(user.getUserId());
        dto.setAccountId(user.getAccountId());
        return dto;
    }

    public AccountDetails createAccount(User user) {
        String url = "http://account-ms/user/accounts/add";
        CreateAccountRequest request=new CreateAccountRequest();
        request.setUserId(user.getUserId());
        AccountDetails details = restTemplate.postForObject(url, request, AccountDetails.class);
        return details;
    }

}
