package com.myapp.juvmark;

import java.io.File;

public class DirectoryInitialization{
  
    public static void Setup(){
        
        File DataDir = new File("Data");
        File CurriculumsDir = new File("Data/Curriculums");
        File TasksDir = new File("Data/Tasks");
        File CurrentClassDir = new File("Data/CurrentClasses");
        File PassedClassDir = new File("Data/PassedClasses");
        File StudentsDir = new File("Data/Students");
        
        //If no directory exists, make one
        if(!DataDir.exists()){
            if(DataDir.mkdir()){
                CurriculumsDir.mkdir();
                TasksDir.mkdir();
                CurrentClassDir.mkdir();
                PassedClassDir.mkdir();
                StudentsDir.mkdir();
                System.out.println("All directories successfully made");    
            }
            else{
                System.out.println("Directory failed to be made");
            }
        }
        
        if(!CurriculumsDir.exists()){
            CurriculumsDir.mkdir();
        }
        
        if(!TasksDir.exists()){
            TasksDir.mkdir();
        }
        
        if(!CurrentClassDir.exists()){
            CurrentClassDir.mkdir();
        }

        if(!PassedClassDir.exists()){
            PassedClassDir.mkdir();
        }

        if(!StudentsDir.exists()){
            StudentsDir.mkdir();
        }
    }
}