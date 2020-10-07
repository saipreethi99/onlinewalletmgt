package com.dxctraining.gateway.controller;

import com.dxctraining.gateway.dto.CreateTokenRequest;
import com.dxctraining.gateway.dto.CreateUserRequest;
import com.dxctraining.gateway.dto.TokenResponse;
import com.dxctraining.gateway.dto.UserDetails;
import com.dxctraining.gateway.entities.UserCredential;
import com.dxctraining.gateway.exceptions.IncorrectCredentialsException;
import com.dxctraining.gateway.service.CredentialService;
import com.dxctraining.gateway.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;

@RestController
@Validated
public class GateController {
    private static final Logger Log = LoggerFactory.getLogger(GateController.class);

    @Value("${userservice.baseurl}")
    private String userServiceBaseUrl;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private CredentialService service;

    @PostMapping("/register")
    public ResponseEntity<UserDetails> register(@RequestBody @Valid CreateUserRequest requestData) {
        String url = userServiceBaseUrl + "/add";
        UserDetails createCustomer = restTemplate.postForObject(url, requestData, UserDetails.class);
        UserCredential credential = new UserCredential();
        credential.setPassword(createCustomer.getPassword());
        credential.setRole(requestData.getRole());
        credential.setUsername(createCustomer.getUsername());
        credential=service.save(credential);
        ResponseEntity<UserDetails> response = new ResponseEntity<>(createCustomer, HttpStatus.OK);
        return response;
    }

    @PostMapping("/createtoken")
    public ResponseEntity<TokenResponse> createToken(@RequestBody @Valid CreateTokenRequest requestData) {
        String username = requestData.getUsername();
        String password = requestData.getPassword();
        boolean correct = service.checkCredentials(username, password);
        if (!correct) {
            throw new IncorrectCredentialsException("incorrect credentials");
        }
        UserCredential credential =service.findByUsername(username);
        String role=credential.getRole();
        String token = TokenUtil.generateToken(username, password,role);
        UserDetails userDetails=fetchUserDetailsByUsername(username);
        TokenResponse tokenResponse=new TokenResponse();
        tokenResponse.setToken(token);
        tokenResponse.setUserDetails(userDetails);
        ResponseEntity<TokenResponse> response = new ResponseEntity<>(tokenResponse, HttpStatus.OK);
        return response;
    }

    public UserDetails fetchUserDetailsByUsername(String username){
        String url=userServiceBaseUrl+"/by/username/"+username;
        UserDetails userDetails=restTemplate.getForObject(url,UserDetails.class);
        return userDetails;
    }

}
