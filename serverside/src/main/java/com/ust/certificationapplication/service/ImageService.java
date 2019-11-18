package com.ust.certificationapplication.service;

import com.ust.certificationapplication.Model.FileModel;
import com.ust.certificationapplication.repo.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ImageService {


        @Autowired
        private FileRepository fileRepository;


        public List<FileModel> getimage(String id,String coursename)
        {
            return fileRepository.findcertificateimage(id,coursename);
        }

}


