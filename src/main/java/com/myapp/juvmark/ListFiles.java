package com.myapp.juvmark;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class ListFiles {
   
    public static List<String> listCurriculum(String directoryName){
        File directory = new File(directoryName);
        List<String> resultList = new ArrayList<String>();

        //get all the files from a directory
        File[] fList = directory.listFiles();
        for (File file : fList){
            if (file.isFile()){
                System.out.println(file.getName());
                String temp = file.getName();
               
               //Removes the .json
                for (int i = 0; i < temp.length(); i++) {
                    final char dotFinder = temp.charAt(i);
        
                    if (dotFinder == '.') {
                        int dotLocation = i;
                        temp = temp.substring(0, dotLocation-10);
                        resultList.add(temp);
                    }
                }
            }
        }
        System.out.println(resultList);
        return resultList;
    }       

    public static List<String> listTasks(String classFile){
        File directory = new File("Data/Tasks/");
        List<String> resultList = new ArrayList<String>();

        //Isolate class code
        for (int i = 0; i < classFile.length(); i++) {
            char dotFinder1 = classFile.charAt(i);

            if (dotFinder1 == '.') {
                int dotLocation1 = i;
                classFile = classFile.substring(0, dotLocation1);
            }
        }
       
        //Get all the files from a directory
        File[] fList = directory.listFiles();
        for (File file : fList){
            if (file.isFile()){
                //System.out.println(file.getName());
                String temp = file.getName();
               
                //Check for files containing the passed in class
                if(temp.contains(classFile)){
                   
                    //Removes the .json
                    for (int i = 0; i < temp.length(); i++) {
                    final char dotFinder2 = temp.charAt(i);
                   
                    if (dotFinder2 == '.') {
                        int dotLocation = i;
                        temp = temp.substring(0, dotLocation-5);
                        resultList.add(temp);
                    }
                }
            }
            }
        }
        System.out.println(resultList);
        return resultList;
    }       
}