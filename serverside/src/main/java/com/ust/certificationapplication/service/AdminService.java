package com.ust.certificationapplication.service;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.ust.certificationapplication.Model.AdminRecord;
import com.ust.certificationapplication.service.LoginResponse;
import com.ust.certificationapplication.repo.AdminRepository;
@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
//    @Autowired
//    private CaptchaService captchaService;

    public boolean authenticateUser(AdminRecord adminRecord) {
        // TODO Auto-generated method stub
        //  AdminRecord admin=adminRecord.findByusername(adminRecord.getUsername()).get();
        try {
            AdminRecord admin = adminRepository.findByusername(adminRecord.getUsername()).get();

            if (admin != null) {
                if (admin.getPassword().equals(adminRecord.getPassword())) {
                    return true;
                }
            }

        } catch (Exception e) {
        }

        return false;
    }
}


//    public LoginResponse login(AdminRecord adminRecord)
//    {
//        System.out.println(adminRecord.getUsername());
//
//        LoginResponse loginResponse = new LoginResponse();
//        boolean captchaVerified = captchaService.verify(adminRecord.getRecaptchaResponse());
//        System.out.println(captchaVerified);
//        if(!captchaVerified) {
//            loginResponse.setMessage("Invalid captcha");
//            loginResponse.setStatus(400);
//
//        }
//        if(captchaVerified && adminRecord.getUsername().equals("admin") && adminRecord.getPassword().equals("admin")) {
//            loginResponse.setMessage("Success");
//            loginResponse.setStatus(200);
//            loginResponse.setUsername("admin");
//            loginResponse.setToken("token");
//        }else {
//            loginResponse.setMessage("Invalid credentials.");
//            loginResponse.setStatus(400);
//        }
//        return loginResponse;
//    }


//}