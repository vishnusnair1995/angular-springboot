package com.ust.certificationapplication.Model;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

//
@Entity
@Table(name = "admin")
public class AdminRecord
{
   @Id
   int idadmin;
    String username;
    String password;



    public int getIdadmin() {
        return idadmin;
    }

    public void setIdadmin(int idadmin) {
        this.idadmin = idadmin;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

