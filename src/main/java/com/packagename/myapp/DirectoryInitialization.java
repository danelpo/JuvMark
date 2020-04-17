package com.packagename.myapp;

import java.io.File;

public class DirectoryInitialization{
  
    public static void main(String[] args){
        
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
        else{
            System.out.println("Data directory already exists");
        }
    }
}