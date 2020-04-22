package com.myapp.juvmark;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class ListFiles {
   
    public static List<String> listFiles(String directoryName){
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
                        temp = temp.substring(0, dotLocation);
                        resultList.add(temp);
                    }
                }
            }
        }
        System.out.println(resultList);
        return resultList;
    }

}