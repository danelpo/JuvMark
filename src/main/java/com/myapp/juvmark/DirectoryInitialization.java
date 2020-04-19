package com.myapp.juvmark;

import java.io.File;

public class DirectoryInitialization{
  
    public static void Setup(){
        
        File DataDir = new File("Data");
        File CurriculumsDir = new File("Data/Curriculums");
        File TasksDir = new File("Data/Tasks");
        File StudentsDir = new File("Data/Students");
        
        //If no directory exists, make one
        if(!DataDir.exists()){
            if(DataDir.mkdir()){
                CurriculumsDir.mkdir();
                TasksDir.mkdir();
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
        
        if(!StudentsDir.exists()){
            System.out.println("hey");
            StudentsDir.mkdir();
        }
    }
}