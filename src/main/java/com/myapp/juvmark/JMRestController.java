package com.myapp.juvmark;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/data")
public class JMRestController {

    @GetMapping("/curriculum")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> allCurriculums() {
        return(ListFiles.listFiles("Data/Curriculums"));
    }
}