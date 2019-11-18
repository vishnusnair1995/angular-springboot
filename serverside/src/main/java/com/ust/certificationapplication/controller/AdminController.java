package com.ust.certificationapplication.controller;

import com.ust.certificationapplication.Model.AdminRecord;
import com.ust.certificationapplication.service.AdminService;
//import org.json.JSONObject;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ust.certificationapplication.service.CaptchaService;
import com.ust.certificationapplication.service.LoginResponse;
@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private CaptchaService captchaService;


    // @RequestMapping(value="/login",method= RequestMethod.POST)
//    @RequestMapping(value="/login",method= RequestMethod.POST)
    @GetMapping("/login")
    public ResponseEntity<?> userLogin(@RequestHeader(value = "username") String username,
                                       @RequestHeader(value = "password") String password) {

        AdminRecord admin = new AdminRecord();
        admin.setUsername(username);
        admin.setPassword(password);


        JSONObject obj = new JSONObject();


        if (!adminService.authenticateUser(admin)) {
            obj.put("status", "False");
            obj.put("Message", "incorrect password");
            return new ResponseEntity(obj, HttpStatus.OK);
            // return false;
        }


        obj.put("status", "True");
        obj.put("Message", "Successfully login");
        return new ResponseEntity(obj, new HttpHeaders(), HttpStatus.OK);
    }
}
           // return false;
//
//    }
//
//
//    public LoginResponse login(@RequestBody AdminRecord adminRecord) {
//        System.out.println(adminRecord.getPassword());
//        return adminService.login( adminRecord);
//    }
//}



