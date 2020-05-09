package com.myapp.juvmark;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class PassedClassesDataSorting {

    public static void endClass(String className) {
        File directory = new File("Data/CurrentClasses");
    
        //get all the files from a directory
        File[] fList = directory.listFiles();
        for (File file : fList){
            if (file.isFile()){
                
                String temp = file.getName();
                
                if(temp.contains(className)){
                    
                    Path temp2 = null;
                    try {
                        temp2 = Files.move(Paths.get("Data/CurrentClasses/" + temp),
                                Paths.get("Data/PassedClasses/" + temp));

                                System.out.println("Insite");
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    
                    if(temp2 != null) { 
                        System.out.println("File moved successfully"); 
                    } 
                    
                    if(temp2 == null){
                        System.out.println("Failed to move file"); 
                    }
                    
                }
            }
        }
    }
}