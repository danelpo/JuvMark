package com.myapp.juvmark;

import java.util.List;

import com.google.gson.JsonElement;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/data")
public class JMRestController {

    @GetMapping("/curriculum")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> allCurriculums() {
        return(ListFiles.listCurriculum("Data/Curriculums"));
    }

    @GetMapping("/curriculum/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getCurriculum(@PathVariable("id") String id){
        return(GetCurriculumAndTasks.getCurriculum(id));
    }

    @GetMapping("/curriculum/{id}/numbers")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getCurriculumNumbers(@PathVariable("id") String id){
        return (GetCurriculumAndTasks.getCurriculumNumbers(id));
    }

    @GetMapping("/curriculum/{id}/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getAllCurriculum(@PathVariable("id") String id){
        return (GetCurriculumAndTasks.getCurriculumNumberAndDescription(id));
    }


    @GetMapping("/curriculum/{id}/tasks")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getTasks(@PathVariable("id") String id){
        return ListFiles.listTasks(id);
    }

    @GetMapping("/curriculum/{id}/tasks/{taskId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getTask(@PathVariable("id") String id, @PathVariable String taskId){
        return (GetCurriculumAndTasks.getTask(id, taskId));
    }
}