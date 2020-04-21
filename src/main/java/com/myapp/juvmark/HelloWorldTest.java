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
        return("test successful!!");
    }
}