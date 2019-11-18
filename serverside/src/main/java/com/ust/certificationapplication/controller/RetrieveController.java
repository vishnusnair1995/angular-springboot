package com.ust.certificationapplication.controller;

import com.ust.certificationapplication.Model.FileModel;

import com.ust.certificationapplication.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;


@RestController
public class RetrieveController {
    @Autowired
    private ImageService imageservice;
//    @RequestMapping(value = "/Image/{id:.+}", method = RequestMethod.GET, consumes = MediaType.ALL_VALUE)
//    public ResponseEntity<byte[]> getImage(@PathVariable("id")String uid, HttpServletResponse response) {
//        byte[] image = imageservice.getimage(uid);  //this just gets the data from a database
//        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
//        return ResponseEntity.ok(image);
//    }
    @RequestMapping(value = "/Image/{id:.+}/{coursename:.+}", method = RequestMethod.GET, consumes = MediaType.ALL_VALUE)
    public List<FileModel> getAllcertificates(@PathVariable("id")String uid,@PathVariable("coursename") String coursename ,HttpServletResponse response){
        return imageservice.getimage(uid,coursename);
    }


}
