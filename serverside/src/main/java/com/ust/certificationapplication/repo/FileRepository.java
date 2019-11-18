package com.ust.certificationapplication.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.ust.certificationapplication.Model.FileModel;

import java.util.List;

@Transactional
public interface FileRepository extends JpaRepository<FileModel, Long> {

    @Query(value = "SELECT * FROM file_table t where t.efxid= :id", nativeQuery = true)
    List<FileModel> findcertificates(@Param("id") String efxid);

    @Query(value = "SELECT * FROM file_table t where t.efxid= :id && t.coursename=:coursename", nativeQuery = true)
    List<FileModel> findcertificateimage(@Param("id") String uid, @Param("coursename") String coursename);

    @Query(value = "Delete  FROM file_table t where t.id= :id and t.coursename=:coursename", nativeQuery = true)
    void deletecourse(@Param("id") String efxid, @Param("coursename") String coursename);

    //  @Query(value="Delete  FROM file_table t where t.id= :id and t.coursename=:coursename", nativeQuery = true)
//  void updateRecord(FileModel filemodel);
    @Query(value = "select id from file_table t where t.efxid=:efxid && t.coursename=:coursename", nativeQuery = true)
    int findRecord(@Param("efxid") String efxid, @Param("coursename") String coursename);


    @Query(value = "select distinct(coursename) from file_table t ", nativeQuery = true)
    public List<String> findAllCourses();
    @Query(value = "select name from user_model t ", nativeQuery = true)
    public List<String> findAllGraph();
    @Query(value = "select record from user_model t ", nativeQuery = true)
    public List<Integer> findAllGraphNo();
    @Query(value = "select edate from file_table t ", nativeQuery = true)
    public List<String> fetchAlldates();

}

