package com.ust.certificationapplication.Model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="file_table")
public class FileModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @JsonView(View.FileInfo.class)
    private Long id;
    @Column(name = "filename")
    @JsonView(View.FileInfo.class)
    private String filename;
    @Column(name = "mimetype")
    private String mimetype;
    @Lob
    @Column(name="pic")
    private byte[] pic;
    private String efxid;

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getEfxid() {
        return efxid;
    }

    public void setEfxid(String efxid) {
        this.efxid = efxid;
    }

    public String getEdate() {
        return edate;
    }

    public void setEdate(String edate) {
        this.edate = edate;
    }

    public String getPdate() {
        return pdate;
    }

    public void setPdate(String pdate) {
        this.pdate = pdate;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    private String coursename;
    private String edate;
    private String pdate;
    private String duration;



    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }







    public FileModel(){}



    public FileModel(String filename, String mimetype, byte[] pic, String efxid,String coursename, String edate,String pdate,String duration){
        this.filename = filename;
        this.mimetype = mimetype;
        this.pic = pic;
        this.efxid=efxid;
        this.coursename=coursename;
        this.edate=edate;
        this.pdate=pdate;
        this.duration=duration;
    }

    public FileModel(String filename, String mimetype, byte[] pic,Long id, String efxid,String coursename, String edate,String pdate,String duration){
        this.filename = filename;
        this.id=id;
        this.mimetype = mimetype;
        this.pic = pic;
        this.efxid=efxid;
        this.coursename=coursename;
        this.edate=edate;
        this.pdate=pdate;
        this.duration=duration;
    }

    public FileModel( String efxid,String coursename, String edate,String pdate,String duration)
    {

        this.efxid=efxid;
        this.coursename=coursename;
        this.edate=edate;
        this.pdate=pdate;
        this.duration=duration;

    }

    public Long getId(){
        return this.id;
    }

    public void setId(Long id){
        this.id = id;
    }


    public String getMimetype(){
        return this.mimetype;
    }

    public void setMimetype(String mimetype){
        this.mimetype = mimetype;
    }

    public byte[] getPic(){
        return this.pic;
    }

    public void setPic(byte[] pic){
        this.pic = pic;
    }





}
