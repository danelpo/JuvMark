package com.packagename.myapp;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class RetriveCreateClassData {
    static String classcode;
    static String date;
    static String savedname;
    static String csvPath;

    public static void setClasscode(String passedClasscode) {
        classcode = passedClasscode;
    }

    public static void setDate(String passedDate) {
        date = passedDate;
    }

    public static void setSavedname() {
        savedname = classcode.concat("_").concat(date);
        csvPath = "Data/Curriculums/" + savedname + ".csv";
    }

    public static void getCurriculum(String passedCurriculum) {
        String curriculumNumber;
        String description;
        System.out.println("test");
        //Find underscore 
        for(int i = 0; i < passedCurriculum.length(); i++){
            char underscoreFinder = passedCurriculum.charAt(i);
            int underscoreLocation = i;

            if(underscoreFinder == '_'){
                underscoreLocation = i;
                curriculumNumber = passedCurriculum.substring(0, underscoreLocation);
                description = passedCurriculum.substring(underscoreLocation+1);
                
                try {
                    FileWriter fw = new FileWriter(csvPath, true);
                    BufferedWriter bw = new BufferedWriter(fw);
                    PrintWriter pw = new PrintWriter(bw);
        
                    pw.println(curriculumNumber + "," + description);
                    pw.flush();
                    pw.close();

                    System.out.println("Record saved");
                } 
                catch (IOException e) {
                    System.out.println("Record not saved");
                }
            }
        }
        
    }

}