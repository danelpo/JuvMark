package com.myapp.juvmark;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class CreateClassDataSorting {
    static String classcode;
    static String date;
    static String index;
    static String savedname;
    static String csvCurriculumPath;
    static String JSONCurriculumPath;
    static String JSONTaskPath;
    static String JSONCurTask;

    Gson curriculumJSON = new GsonBuilder().setPrettyPrinting().create();
    Gson taskJSON = new GsonBuilder().setPrettyPrinting().create();

    /*
    public static void setClasscode(String passedClasscode) {
        classcode = passedClasscode;
    }
    
    public static void setDate(String passedDate) {
        date = passedDate;
    }

    public static void setIndex(String passedIndex) {
        index = passedIndex;
    }
    */
    //Will create a name for referencing
    public static void setSavedname(String className) {
        savedname = className;
        JSONCurriculumPath = "Data/Curriculums/" + savedname + "curriculum.json";
        JSONTaskPath = "Data/Tasks/" + savedname + "tasks.json";
    }

    //Accepts passed in curriculums
    public static void setCurriculum(String passedCurriculum, int number) {
        String curriculumNumber;
        String description;

        for (int h = 0; h < passedCurriculum.length(); h++) {
        
        }

        // Find underscore
        for (int i = 0; i < passedCurriculum.length(); i++) {
            final char underscoreFinder = passedCurriculum.charAt(i);
            int underscoreLocation = i;

            if (underscoreFinder == '_') {
                underscoreLocation = i;
                curriculumNumber = passedCurriculum.substring(0, underscoreLocation);
                description = passedCurriculum.substring(underscoreLocation + 1);

                //If first passed curriculum
                if(number == 1){
                    JsonObject curriculumDetails = new JsonObject();
                    curriculumDetails.addProperty("CurriculumNumber", curriculumNumber);
                    curriculumDetails.addProperty("Description", description);
                    
                    try {
                        FileWriter fw = new FileWriter(JSONCurriculumPath, true);
                        BufferedWriter bw = new BufferedWriter(fw);
                        PrintWriter pw = new PrintWriter(bw);
                        
                        pw.println("{\"Curriculums\":{");
                        pw.println("\t" + "\"" + curriculumNumber + "\"" + ":"+ curriculumDetails + ",");
                        pw.flush();
                        pw.close();
            
                        System.out.println("Successfully interacted with curriculum JSON File");
                    } catch (final IOException e) {
                        System.out.println("Error with JSON");
                    }
                    
                }

                //If middle curriculum
                if(number == 0){
                    JsonObject curriculumDetails = new JsonObject();
                    curriculumDetails.addProperty("CurriculumNumber", curriculumNumber);
                    curriculumDetails.addProperty("Description", description);
                    
                    try {
                        FileWriter fw = new FileWriter(JSONCurriculumPath, true);
                        BufferedWriter bw = new BufferedWriter(fw);
                        PrintWriter pw = new PrintWriter(bw);
                        
                        pw.println("\t" + "\"" + curriculumNumber + "\"" + ":"+ curriculumDetails + ",");
                        pw.flush();
                        pw.close();
            
                        System.out.println("Successfully interacted with curriculum JSON File");
                    } catch (final IOException e) {
                        System.out.println("Error with JSON");
                    }
                    
                }

                //If last passed curriculum
                if(number == 2){
                    JsonObject curriculumDetails = new JsonObject();
                    curriculumDetails.addProperty("CurriculumNumber", curriculumNumber);
                    curriculumDetails.addProperty("Description", description);
                    
                    try {
                        FileWriter fw = new FileWriter(JSONCurriculumPath, true);
                        BufferedWriter bw = new BufferedWriter(fw);
                        PrintWriter pw = new PrintWriter(bw);
                        
                        pw.println("\t" + "\"" + curriculumNumber + "\"" + ":"+ curriculumDetails);
                        pw.println("}}");
                        pw.flush();
                        pw.close();
            
                        System.out.println("Successfully interacted with curriculum JSON File");
                    } catch (final IOException e) {
                        System.out.println("Error with JSON");
                    }   
                }
            }
        }
    }

    // Accepts passed in tasks
    public static void setTasks(String curName, String passedTasks, int number) {
        String tasknumber = "null";
        String curriculumNumbers = "null";
        String[] curriculumNumbersArray = null;
        String description = "null";
        int numberUnderscores = 0;
        int numberDashes = 0;
        int numberDashesFound = 0;
        int underscoreLocation1 = 0;
        int underscoreLocation2 = 0;
        int arraySize = 0;

        // Find underscores
        for (int i = 0; i < passedTasks.length(); i++) {
            final char underscoreFinder = passedTasks.charAt(i);

            // First underscore (1/2)
            if (underscoreFinder == '_' && numberUnderscores == 0) {
                numberUnderscores++;
                underscoreLocation1 = i;
                tasknumber = passedTasks.substring(0, underscoreLocation1);
            }

            // Second underscore (2/2)
            if (underscoreFinder == '_' && numberUnderscores == 1 && i != underscoreLocation1) {
                underscoreLocation2 = i;
                curriculumNumbers = passedTasks.substring(underscoreLocation1 + 1, underscoreLocation2);
                description = passedTasks.substring(underscoreLocation2 + 1);

                // Counts # of curriculums
                for (int j = 0; j < curriculumNumbers.length(); j++) {
                    final char dashFinder = curriculumNumbers.charAt(j);

                    if (dashFinder == '-') {
                        numberDashes++;
                    }
                }
                // Initialize curriculum number array;
                arraySize = numberDashes + 1;
                curriculumNumbersArray = new String[arraySize];
                int temp = 0;

                // Sorts curriculum numbers into array
                for (int j = 0; j < curriculumNumbers.length(); j++) {
                    final char dashFinder = curriculumNumbers.charAt(j);

                    // For first curriculum number
                    if (dashFinder == '-' && numberDashesFound == 0) {
                        numberDashesFound++;
                        temp = j;
                        curriculumNumbersArray[numberDashesFound - 1] = curriculumNumbers.substring(0, j);
                    }

                    // For all curriculum numbers except first and last
                    if (dashFinder == '-' && temp != j) {
                        numberDashesFound++;
                        curriculumNumbersArray[numberDashesFound - 1] = curriculumNumbers.substring(temp + 1, j);
                        temp = j;
                    }

                    // For last curriculum number
                    if (j + 1 == curriculumNumbers.length()) {
                        numberDashesFound++;
                        curriculumNumbersArray[numberDashesFound - 1] = curriculumNumbers.substring(temp + 1,
                                curriculumNumbers.length());
                    }
                }
            }
        }
        
        //First task pushed
        if(number == 1){
            JsonObject taskDetails = new JsonObject();
            taskDetails.addProperty("TaskNumber", tasknumber);
            
            JsonArray curriculumArrayJson = new JsonArray();
            for (int i = 0; i < arraySize; i++) {
                curriculumArrayJson.add(curriculumNumbersArray[i]);
            }
            taskDetails.add("Curriculums", curriculumArrayJson);
            taskDetails.addProperty("Description", description);
            
            //CurTaskMapping Json
            File directory = new File("Data/CurTaskMapping");
    
            //get all the files from a directory
            File[] fList = directory.listFiles();
            for (File file : fList){
                if (file.isFile()){
                    //System.out.println(file.getName());
                    String temp = file.getName();
                    
                    if(temp.contains(curName)){
                        file.delete();
                        System.out.println("Deleted old mapping");
                    }
                }
            }

            try {
                JSONCurTask = "Data/CurTaskMapping/" + curName + ".json" ;
                FileWriter fw = new FileWriter(JSONCurTask, true);
                BufferedWriter bw = new BufferedWriter(fw);
                PrintWriter pw = new PrintWriter(bw);
                
                pw.println("{\"" + curName + "\":{");
                pw.println("\t" + "\"Curriculum\"" + ":\""+ curName + "\",");
                pw.println("\t" + "\"Task\"" + ":\""+ savedname + "\"");
                pw.println("}}");
                pw.flush();
                pw.close();
    
                System.out.println("Successfully interacted with CurTaskMapping JSON File");
            } catch (final IOException e) {
                System.out.println("Error with CurTaskMapping JSON");
            }

            //Task Json
            try {
                FileWriter fw = new FileWriter(JSONTaskPath, true);
                BufferedWriter bw = new BufferedWriter(fw);
                PrintWriter pw = new PrintWriter(bw);
                
                pw.println("{\"Tasks\":{");
                pw.println("\t" + "\"" + tasknumber + "\"" + ":"+ taskDetails + ",");
                pw.flush();
                pw.close();
    
                System.out.println("Successfully interacted with task JSON File");
            } catch (final IOException e) {
                System.out.println("Error with task JSON");
            }
            
        }

        //Middle tasks
        if(number == 0){
            JsonObject taskDetails = new JsonObject();
            taskDetails.addProperty("TaskNumber", tasknumber);
            
            JsonArray curriculumArrayJson = new JsonArray();
            for (int i = 0; i < arraySize; i++) {
                curriculumArrayJson.add(curriculumNumbersArray[i]);
            }
            taskDetails.add("Curriculums", curriculumArrayJson);
            taskDetails.addProperty("Description", description);

            try {
                FileWriter fw = new FileWriter(JSONTaskPath, true);
                BufferedWriter bw = new BufferedWriter(fw);
                PrintWriter pw = new PrintWriter(bw);
                
                pw.println("\t" + "\"" + tasknumber + "\"" + ":"+ taskDetails + ",");
                pw.flush();
                pw.close();
    
                System.out.println("Successfully interacted with task JSON File");
            } catch (final IOException e) {
                System.out.println("Error with task JSON");
            }
            
        }

        //Last Task
        if(number == 2){
            JsonObject taskDetails = new JsonObject();
            taskDetails.addProperty("TaskNumber", tasknumber);
            
            JsonArray curriculumArrayJson = new JsonArray();
            for (int i = 0; i < arraySize; i++) {
                curriculumArrayJson.add(curriculumNumbersArray[i]);
            }
            taskDetails.add("Curriculums", curriculumArrayJson);
            taskDetails.addProperty("Description", description);

            try {
                FileWriter fw = new FileWriter(JSONTaskPath, true);
                BufferedWriter bw = new BufferedWriter(fw);
                PrintWriter pw = new PrintWriter(bw);
                
                pw.println("\t" + "\"" + tasknumber + "\"" + ":"+ taskDetails);
                pw.println("}}");
                pw.flush();
                pw.close();
    
                System.out.println("Successfully interacted with task JSON File");
            } catch (final IOException e) {
                System.out.println("Error with task JSON");
            }   
        }
    }
}