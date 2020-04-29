package com.myapp.juvmark;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.Arrays;
import java.util.Collections;

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

    @GetMapping("/curriculum/{id}/{curId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getAllCurriculum(@PathVariable("id") String id, @PathVariable("curId") String curId){
        return (GetCurriculumAndTasks.getSpecificCurriculumNumberAndDescription(id, curId));
    }


    @GetMapping("/curriculum/{id}/tasks")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getTasks(@PathVariable("id") String id){
        return ListFiles.listTasks(id);
    }

    @GetMapping("/curriculum/{id}/tasks/{taskName}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getTask(@PathVariable("id") String id, @PathVariable("taskName") String taskName){
        return (GetCurriculumAndTasks.getTask(id, taskName));
    }

    @GetMapping("/curriculum/{id}/tasks/{taskName}/{taskId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getSpecificTask(@PathVariable("id") String id, @PathVariable("taskName") String taskName, @PathVariable("taskId") String taskId){
        return (GetCurriculumAndTasks.getSpecificTask(id, taskName, taskId));
    }

    @PostMapping("/curriculum/newName/{name}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void setName(@PathVariable("name") String name){
        CreateClassDataSorting.setSavedname(name);
        System.out.println("In setName");
    }

    @PostMapping("/curriculum/addCurriculum/{curriculum}/{number}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void addCurriculum(@PathVariable("curriculum") String curriculum, @PathVariable("number") int number){
        CreateClassDataSorting.setCurriculum(curriculum, number);
        System.out.println("In addCurriculum");
    }

    @PostMapping("/curriculum/addTask/{task}/{number}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void addTask(@PathVariable("task") String task, @PathVariable("number") int number){
        CreateClassDataSorting.setTasks(task, number);
        System.out.println("In addTask");
    }
    //this allows port 3000(react/client) to post to the api
    @Bean
    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
    //this is where the client will test posting to the api (/api/data/user)
    @RequestMapping(value = "/user", method = {RequestMethod.GET, RequestMethod.POST})
    @CrossOrigin(origins = "http://localhost:3000")
    public String userTest() {
        return "here";
    }
}