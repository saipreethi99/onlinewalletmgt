package com.dxctraining.gateway.service;

import com.dxctraining.gateway.entities.UserCredential;

public interface CredentialService {

    boolean checkCredentials(String username, String password);

    UserCredential findByUsername(String username);

    UserCredential save(UserCredential user);

    boolean isAdmin(String username);

}
