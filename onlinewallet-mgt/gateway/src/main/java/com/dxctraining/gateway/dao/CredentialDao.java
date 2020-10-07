package com.dxctraining.gateway.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dxctraining.gateway.entities.UserCredential;

public interface CredentialDao extends JpaRepository<UserCredential,String> {

}
