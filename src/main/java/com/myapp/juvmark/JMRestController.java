package com.myapp.juvmark;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

@RestController
@RequestMapping("/api/data")
public class JMRestController {

    //List Curriculum
    @GetMapping("/curriculum")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> allCurriculums() {
        return(ListFiles.listCurriculum("Data/Curriculums"));
    }

    //All curriculums
    @GetMapping("/curriculum/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getCurriculum(@PathVariable("id") String id){
        return(GetCurriculumAndTasks.getCurriculum(id));
    }

    //Curriculum numbers of specified curriculum
    @GetMapping("/curriculum/{id}/numbers")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getCurriculumNumbers(@PathVariable("id") String id){
        return (GetCurriculumAndTasks.getCurriculumNumbers(id));
    }

    //All numbers and descriptions of specific curriculum
    @GetMapping("/curriculum/{id}/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getAllCurriculum(@PathVariable("id") String id){
        return (GetCurriculumAndTasks.getCurriculumNumberAndDescription(id));
    }

    //Values of a specific curriculum expectation
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
        System.out.println(name);
    }

    @PostMapping("/curriculum/addCurriculum/{curriculum}/{number}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void addCurriculum(@PathVariable("curriculum") String curriculum, @PathVariable("number") int number){
        CreateClassDataSorting.setCurriculum(curriculum, number);
        System.out.println("In addCurriculum");
    }

    @PostMapping("/curriculum/addTask/{curName}/{task}/{number}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void addTask(@PathVariable("curName") String curName, @PathVariable("task") String task, @PathVariable("number") int number){
        CreateClassDataSorting.setTasks(curName, task, number);
    }

    /*className will be in the format classCode_date. example: ICS4M-02_2019-2020 or HIV4U-08_2021-2021
    * curriculumName will be the name of the curriculum. example: CUM2D_2019-2020_2
    * taskListName will be the name of the task list. example: POOPSICLE3X_2029-2029_3
    */
    @PostMapping("/class/createClass/{className}/{curriculumName}/{taskListName}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void createNewClass(@PathVariable("className") String className, @PathVariable("curriculumName") String curName, @PathVariable("taskListName") String task){
        System.out.println("creating class " + className);
        System.out.println("with curriculum " + curName);
        System.out.println("and with task list " + task);
    }

    //this is where a list of all the current classes will be
    @GetMapping("/class/current/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> printAllCurrentClasses() {
        //just for now:
        List<String> testArray = new ArrayList<String>();
        testArray.add("ICS4U-01_2020-2020");
        testArray.add("ICS4U-02_2020-2020");
        testArray.add("TEJ4M-01_2020-2020");
        testArray.add("AWQ4M-06_2020-2020");
        return testArray;
    }

    //this is where a list of all the past classes will be
    @GetMapping("/class/past/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public String printAllPastClasses() {
        return "all past classes";
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
}