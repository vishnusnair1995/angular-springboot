package com.ust.certificationapplication.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.*;

import com.ust.certificationapplication.Model.FileModel;
import com.ust.certificationapplication.Model.UserModel;

import com.ust.certificationapplication.repo.FileRepository;
import com.ust.certificationapplication.repo.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import static java.time.Month.*;


@Service
public class FormService {
    String efxid;
    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private FormRepository formRepository;

    public void  addUser(UserModel usermodel)
    {

//UserModel user = FormRepository.findByusername(adminRecord.getUsername()).get();
        try {
            efxid = formRepository.findByefxid(usermodel.getEfxid());


//            formRepository.save(usermodel);
//            int no = formRepository.countRecords(usermodel.getEfxid());
//            System.out.println("no is" + no);
//
//
//            formRepository.updateTable(no, usermodel.getEfxid());


        } catch (Exception e) { }
        if (efxid == null)
        {
            formRepository.save(usermodel);
            int no = formRepository.countRecords(usermodel.getEfxid());
            System.out.println("no is" + no);


            formRepository.updateTable(no, usermodel.getEfxid());

        }
        else
            {
            int no = formRepository.countRecords(usermodel.getEfxid());
            System.out.println("no is" + no);


            formRepository.updateTable(no, usermodel.getEfxid());

        }

    }

//
//        {
//            formRepository.save(usermodel);
//            int no = formRepository.countRecords(usermodel.getEfxid());
//            System.out.println("no is" + no);
//
//
//         formRepository.updateTable(no, usermodel.getEfxid());
//
//        }





//    public List<UserModel> getAllUsers()
//    {
//        List<UserModel> usermodel = new ArrayList<>();
//        formRepository.findAll().forEach(usermodel::add);
//        System.out.println("list is"+usermodel);
//
//        return usermodel;
//    }

    public List<UserModel> getAllUsers()
    {
        List<UserModel> usermodel = new ArrayList<>();
      usermodel=  formRepository.fetchRecords();
//        System.out.println("list is"+usermodel);

        return usermodel;
    }




    public List<FileModel> getdetails()
    {
        List<FileModel> filemodel = new ArrayList<>();
        fileRepository.findAll().forEach(filemodel::add);

        return filemodel;
    }

    public void delete(String id, String coursename) {

        fileRepository.deletecourse(id, coursename);
//        fileRepository.updateRecordCount(id,coursename);



    }
    public HashMap<Month,Integer>  fetchDates() throws Exception {
        List<String> datesinstring = new ArrayList<>();
        List<Month> date = new ArrayList<>();
        datesinstring = fileRepository.fetchAlldates();

        HashMap<Month,Integer> monthAndNumber = new HashMap<>();
        monthAndNumber.put(JANUARY,0);
        monthAndNumber.put(FEBRUARY,0);
        monthAndNumber.put(MARCH,0);
        monthAndNumber.put(APRIL,0);
        monthAndNumber.put(MAY,0);
        monthAndNumber.put(JUNE,0);
        monthAndNumber.put(JULY,0);

        monthAndNumber.put(AUGUST,0);
        monthAndNumber.put(SEPTEMBER,0);
        monthAndNumber.put(OCTOBER,0);
        monthAndNumber.put(NOVEMBER,0);
        monthAndNumber.put(DECEMBER,0);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.ENGLISH);
        for (String s : datesinstring) {
            {
                LocalDate date1 = LocalDate.parse(s, formatter);
       Month month= date1.getMonth();

               // Month string = s;
               int i=  monthAndNumber.get(month);

                monthAndNumber.put(month,i+1);


//            LocalDate date1 = LocalDate.parse(string, formatter);
//          Month month= date1.getMonth();
//                Date date1=new SimpleDateFormat("yyyy-mm-dd").parse(string);
//                System.out.println("\t"+date1);
//                System.out.println(date1);

                date.add(month);
            }
//            date.add(new SimpleDateFormat("dd/MM/yyyy").parse( datesinstring[i]));
            }
            //return date;
        return monthAndNumber;
        }
    }
//    public List<UserRecord> getAllUsers() {
//        List<UserRecord> userRecords = new ArrayList<>();
//        userRepository.findAll().forEach(userRecords::add);
//
//        return userRecords;
//    }

//    public List<UserRecord> getUser(String id) {
//        return userRepository.findById(id);
//    }


    //    List<UserRecord>getNames() {
//        List<UserRecord> findDistinctByName();
//    }
//    public void delete(String id) {
//        userRepository.deleteById(id);
//
//    }

