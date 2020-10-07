package com.dxctraining.usermgt.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class User {

	@Id
	@GeneratedValue
	private Long userId;
	private String userType;
	@Column(unique = true)
	private String userName;
	private String userPhone;
	private String password;
	private Long accountId;
	
	public User() {
	}
	public User(String userType, String userName, String userPhone, String password) {
		this.userType = userType;
		this.userName = userName;
	    this.userPhone = userPhone;
		this.password = password;
	}
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	@Override
	public boolean equals(Object arg) {
		if (this == arg) {
			return true;
		}

		if (arg == null || !(arg instanceof User)) {
			return false;
		}

		User that = (User) arg;
		boolean isequal = this.userId.equals(that.userId);
		return isequal;
	}

	@Override
	public int hashCode() {
		return userId.hashCode();
	}

}
		
	
