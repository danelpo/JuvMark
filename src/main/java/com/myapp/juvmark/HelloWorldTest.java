package com.myapp.juvmark;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
public class HelloWorldTest {

    @RequestMapping("/hello")
    @CrossOrigin(origins = "http://localhost:3000")
    public String hello() {
        final String myString = "{'Tasks':{'T1':{'Task Number':'T1','Curriculums':['A1','B1','C1'],"+
        "'Description':'des crisp'},'Q1':{'Task Number':'Q1','Curriculums':['A2','A3','B1','C1','C3'],"+
        "'Description':'descrip'},'Q2':{'Task Number':'Q2','Curriculums':['A2','A3','B3'],'Description':'description'},"+
        "'T2':{'Task Number':'T2','Curriculums':['B3','B4','C2','D1'],'Description':'des,cription'}}}";
        return(myString);
    }
}