package com.ust.certificationapplication.controller;

import com.ust.certificationapplication.Model.FileModel;
import com.ust.certificationapplication.Model.UserModel;
import com.ust.certificationapplication.repo.FileRepository;
import com.ust.certificationapplication.repo.FormRepository;
import com.ust.certificationapplication.service.FormService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;


@RestController
public class FormController {

    @Autowired
    private FormService formService;

    @Autowired
    private FileRepository fileRepository;
    @Autowired
    private FormRepository formRepository;

    @RequestMapping(value = "/add-users", method = RequestMethod.POST)
    public void addUser(@RequestBody UserModel usermodel) {


        formService.addUser(usermodel);
        int no=formRepository.countRecord(usermodel.getEfxid());
        System.out.println("no is"+no);
        formRepository.updateTable(no,usermodel.getEfxid());
    }

//    @RequestMapping("/fetchcertificate/{id}")
//    public List<FileModel> getAlldetails() {
//        return formService.getdetails(id);
//    }

    @RequestMapping("/fetching")
    public List<UserModel> getAlllUser(){
        return formService.getAllUsers();
    }




    @RequestMapping("/fetchcertificate/{id}")
    public List<FileModel> getDetails(@PathVariable String id) {

        return fileRepository.findcertificates(id);
    }
    @RequestMapping(value="/delete/{id}/{efxid}", method=RequestMethod.DELETE)
    public void deleteStudent(@PathVariable("id") long id,@PathVariable("efxid") String efxid) {
        System.out.println(efxid);
      fileRepository.deleteById(id);
        int no=formRepository.countRecord(efxid);
        System.out.println("no is"+no);
        formRepository.updateTable(no,efxid);

//       formService.delete(id,coursename);
    }
    @RequestMapping("/fetchcourse")
    public List<String> getCourse() {

return fileRepository.findAllCourses();
      //  return fileRepository.findAll();
    }
    @RequestMapping("/fetchcgraph")
    public List<String> getgraph() {
        List<String> graph = new ArrayList<>();
        graph=fileRepository.findAllGraph();
        return graph;
      //  return fileRepository.findAllGraph();
        //  return fileRepository.findAll();
    }

    @RequestMapping("/fetchcRecordsNumber")
            public List<Integer> getgraphNumber() {
            List<Integer> graphNoOfRecords = new ArrayList<>();
        graphNoOfRecords=fileRepository.findAllGraphNo();
            return graphNoOfRecords;
            //  return fileRepository.findAllGraph();
            //  return fileRepository.findAll();
            }

    @RequestMapping("/fetchdate")
    public HashMap<Month,Integer> getgraphDate() throws Exception{
        //List<Month> dates = new ArrayList<>();
//        dates=fileRepository.fetchAlldates();
        HashMap<Month,Integer> monthAndNumber = new HashMap<>();
        monthAndNumber=formService.fetchDates();
        return monthAndNumber;
        //  return fileRepository.findAllGraph();
        //  return fileRepository.findAll();
    }



}
