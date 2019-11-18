package com.ust.certificationapplication.controller;

import com.ust.certificationapplication.Model.UserModel;
import com.ust.certificationapplication.repo.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.ust.certificationapplication.Model.FileModel;
import com.ust.certificationapplication.repo.FileRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FileController {

    @Autowired
    FileRepository fileRepository;
    @Autowired
    FormRepository formRepository;


    /*
     * MultipartFile Upload
     */
    @PostMapping("/api/file/upload")
    public String uploadMultipartFile(@RequestParam("file") MultipartFile file, String efxid, String coursename, String edate, String pdate, String duration) {
        try {


            FileModel filemode = new FileModel(file.getOriginalFilename(), file.getContentType(), file.getBytes(), efxid, coursename, edate, pdate, duration);

            fileRepository.save(filemode);

                int no = formRepository.countRecords(efxid);
                System.out.println("orginallllllno is" + no);
                formRepository.updateTable(no,efxid);



            return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
        } catch (Exception e) {
            return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
        }
    }

    @PostMapping("/api/upload")
    public String uploadRecord(String efxid, String coursename, String edate, String pdate, String duration) {
        try {


            FileModel filemode = new FileModel(efxid,coursename,edate,pdate,duration);

            fileRepository.save(filemode);

            int no = formRepository.countRecords(efxid);
            System.out.println("orginallllllno is" + no);
            formRepository.updateTable(no,efxid);



            return "File uploaded successfully! -> filename = " ;
        } catch (Exception e) {
            return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
        }
    }







    @PostMapping("/update")
    public String updateRecord(@RequestParam("file") MultipartFile file,@RequestParam("id")Long id ,@RequestParam("efxid")String efxid, @RequestParam("coursename")String coursename, @RequestParam("pdate")String pdate,@RequestParam("edate") String edate, @RequestParam("duration")String duration) {


//        FileModel model = new FileModel();

        System.out.println(file.getSize());
        System.out.println(efxid);
        System.out.println(coursename);
        try {
            System.out.println("haiiiiiiiiii");
//            FileModel model1 = new FileModel();
//            int cid=fileRepository.findRecord(efxid, coursename);
//            System.out.println("iddddddis"+cid);
            FileModel filemode = new FileModel(file.getOriginalFilename(), file.getContentType(), file.getBytes(),id ,efxid, coursename, edate, pdate, duration);
            fileRepository.save(filemode);
            //System.out.println(model1.getId());
            System.out.println("id is"+id);

          return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
        } catch (Exception e) {
            return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
        }

    }
}






