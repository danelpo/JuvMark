package com.myapp.juvmark;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
public class HelloWorldTest {

    @RequestMapping("/hello")
    public String hello() {
        return "Test successful";
    }
}