package com.myapp.juvmark;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;

public class CreateClassDataSorting {
    static String classcode;
    static String date;
    static String savedname;
    static String csvCurriculumPath;
    static String JSONTaskPath;

    public static void setClasscode(String passedClasscode) {
        classcode = passedClasscode;
    }

    public static void setDate(String passedDate) {
        date = passedDate;
    }

    public static void setSavedname() {
        savedname = classcode.concat("_").concat(date);
        csvCurriculumPath = "Data/Curriculums/" + savedname + "curriculum.csv";
        JSONTaskPath = "Data/Tasks/" + savedname + "tasks.json";
    }

    public static void getCurriculum(String passedCurriculum) {
        String curriculumNumber;
        String description;
        
        //Find underscore 
        for(int i = 0; i < passedCurriculum.length(); i++){
            char underscoreFinder = passedCurriculum.charAt(i);
            int underscoreLocation = i;

            if(underscoreFinder == '_'){
                underscoreLocation = i;
                curriculumNumber = passedCurriculum.substring(0, underscoreLocation);
                description = passedCurriculum.substring(underscoreLocation+1);
                
                //Creates csv file, then writes to it.
                try {
                    FileWriter fw = new FileWriter(csvCurriculumPath, true);
                    BufferedWriter bw = new BufferedWriter(fw);
                    PrintWriter pw = new PrintWriter(bw);
        
                    pw.println(curriculumNumber + "," + description + "_curriculum");
                    pw.flush();
                    pw.close();

                    System.out.println("Successfully interacted with CSV");
                } 
                catch (IOException e) {
                    System.out.println("Error with CSV");
                }
            }
        }
        
    }

    //Accepts passed in tasks
    public static void getTasks(String passedTasks) {
        String tasknumber = "null";
        String curriculumNumbers = "null";
        String[] curriculumNumbersArray;
        String description = "null";
        int numberUnderscores = 0;
        int numberDashes = 0;
        int numberDashesFound = 0;
        int underscoreLocation1 = 0;
        int underscoreLocation2 = 0;
        int arraySize = 0;

        //Creates JSON file for tasks
        try {
            FileWriter file = new FileWriter(JSONTaskPath);
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //Find underscores
        for(int i = 0; i < passedTasks.length(); i++){
            char underscoreFinder = passedTasks.charAt(i);

            //First underscore (1/2)
            if(underscoreFinder == '_' && numberUnderscores == 0){
                numberUnderscores++;
                underscoreLocation1 = i;
                tasknumber = passedTasks.substring(0, underscoreLocation1);
            }

            //Second underscore (2/2)
            if(underscoreFinder == '_' && numberUnderscores == 1 && i != underscoreLocation1){
                underscoreLocation2 = i;
                curriculumNumbers = passedTasks.substring(underscoreLocation1 + 1, underscoreLocation2);
                description = passedTasks.substring(underscoreLocation2 + 1);
                 
                //Counts # of curriculums
                for(int j = 0; j < curriculumNumbers.length(); j++){
                    char dashFinder = curriculumNumbers.charAt(j);

                    if(dashFinder == '-'){
                        numberDashes++;
                    }
                }
                //Initialize curriculum number array;
                arraySize = numberDashes + 1;
                curriculumNumbersArray = new String[arraySize];
                int temp = 0;
                
                //Sorts curriculum numbers into array
                for(int j = 0; j < curriculumNumbers.length(); j++){
                    char dashFinder = curriculumNumbers.charAt(j); 

                    //For first curriculum number
                    if(dashFinder == '-' && numberDashesFound == 0){
                        numberDashesFound++;
                        temp = j;
                        curriculumNumbersArray[numberDashesFound-1] = curriculumNumbers.substring(0, j);
                    }

                    //For all curriculum numbers except first and last
                    if(dashFinder == '-' && temp != j){
                        numberDashesFound++;
                        curriculumNumbersArray[numberDashesFound-1] = curriculumNumbers.substring(temp + 1, j);
                        temp = j;
                    }
                    
                    //For last curriculum number
                    if(j + 1 == curriculumNumbers.length()){
                        numberDashesFound++;
                        curriculumNumbersArray[numberDashesFound-1] = curriculumNumbers.substring(temp + 1, curriculumNumbers.length());
                    }
                } 
                System.out.println(curriculumNumbersArray[]);
                System.out.println(description);
            }
        }
    }
}