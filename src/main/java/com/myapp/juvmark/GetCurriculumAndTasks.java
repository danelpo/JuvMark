package com.myapp.juvmark;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

public class GetCurriculumAndTasks {

    //Returns curriculums
    public static String getCurriculum(String id) {
    
        String fileName = "Data/Curriculums/" + id + "curriculum.json";
        String jsonInString = "null";

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (Reader reader = new FileReader(fileName)) {

            // Convert JSON to JsonElement, and later to String
            JsonElement json = gson.fromJson(reader, JsonElement.class);

            jsonInString = gson.toJson(json);

            //System.out.println(jsonInString);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return (jsonInString);
    }

    public static List<String> getCurriculumNumbers(String id){
        String fileName = "Data/Curriculums/" + id + "curriculum.json";
        String jsonInString = "null";
        List<String> resultList = new ArrayList<String>();


        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (Reader reader = new FileReader(fileName)) {

            int counter = 0; 

            // Convert JSON to JsonElement, and later to String
            JsonElement json = gson.fromJson(reader, JsonElement.class);

            jsonInString = gson.toJson(json);

            //Find curriculum numbers
            String curNumber = null;

            for (int i = 0; i < jsonInString.length(); i++) {
                final char curFinder = jsonInString.charAt(i);
    
                if (curFinder == 'C') {
                    char temp = jsonInString.charAt(i + 1);
                   
                    if(temp == 'u'){
                       
                        if(counter != 0){
                            int location = i+20;
                            System.out.println(location);
                            
                            for (int j = location; j < location + 15; j++) {
                                char temp2 = jsonInString.charAt(j);

                                if(temp2 == '"'){
                                    char temp3 = jsonInString.charAt(j + 1);
                                    
                                    if(temp3 == ','){
                                        curNumber = jsonInString.substring(location, j);
                                        j = location + 20;
                                        resultList.add(curNumber);
                                    }
                                    
                                }
                            }
                            System.out.println(resultList);
                        }
                        counter++;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return resultList;
    }

    public static List<String> getCurriculumNumberAndDescription(String id){
        String fileName = "Data/Curriculums/" + id + "curriculum.json";
        String jsonInString = "null";
        String numberAndDescription;
        List<String> resultList = new ArrayList<String>();


        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (Reader reader = new FileReader(fileName)) {

            int curCounter = 0; 

            // Convert JSON to JsonElement, and later to String
            JsonElement json = gson.fromJson(reader, JsonElement.class);

            jsonInString = gson.toJson(json);

            //Find curriculum numbers
            String curNumber = null;

            for (int i = 0; i < jsonInString.length(); i++) {
                final char curFinder = jsonInString.charAt(i);
    
                if (curFinder == 'C') {
                    char temp = jsonInString.charAt(i + 1);
                   
                    if(temp == 'u'){
                       
                        if(curCounter != 0){
                            int location = i+20;
                            //System.out.println(location);
                            
                            for (int j = location; j < location + 15; j++) {
                                char temp2 = jsonInString.charAt(j);

                                if(temp2 == '"'){
                                    char temp3 = jsonInString.charAt(j + 1);
                                    
                                    if(temp3 == ','){
                                        curNumber = jsonInString.substring(location, j);
                                      
                                        String description = null;
                                        int deslocation = j + 25;
            
                                        for (int l = deslocation; l < jsonInString.length(); l++) {
                                            char temp5 = jsonInString.charAt(l);
                                        
                                            if(temp5 == '"'){
                                                description = jsonInString.substring(deslocation, l);
                                                l = jsonInString.length();
                                                numberAndDescription = curNumber + "," + description;
                                                System.out.println(numberAndDescription);
                                                j = location + 20;
                                                resultList.add(numberAndDescription);
                                            }
                                            
                                        }
                                         
                                    }
                                    
                                }
                            }
                            System.out.println(resultList);
                        }
                        curCounter++;
                    }
                }
            }

            //Get Description
        } catch (IOException e) {
            e.printStackTrace();
        }
        return resultList;
    }

    public static List<String> getSpecificCurriculumNumberAndDescription(String id, String passCurNumber){
        String fileName = "Data/Curriculums/" + id + "curriculum.json";
        String jsonInString = "null";
        String numberAndDescription;
        List<String> resultList = new ArrayList<String>();


        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (Reader reader = new FileReader(fileName)) {

            int curCounter = 0; 

            // Convert JSON to JsonElement, and later to String
            JsonElement json = gson.fromJson(reader, JsonElement.class);

            jsonInString = gson.toJson(json);

            //Find curriculum numbers
            String curNumber = null;

            for (int i = 0; i < jsonInString.length(); i++) {
                final char curFinder = jsonInString.charAt(i);
    
                if (curFinder == 'C') {
                    char temp = jsonInString.charAt(i + 1);
                   
                    if(temp == 'u'){
                       
                        if(curCounter != 0){
                            int location = i+20;
                            //System.out.println(location);
                            
                            for (int j = location; j < location + 15; j++) {
                                char temp2 = jsonInString.charAt(j);

                                if(temp2 == '"'){
                                    char temp3 = jsonInString.charAt(j + 1);
                                    
                                    if(temp3 == ','){
                                        curNumber = jsonInString.substring(location, j);
                                
                                        if(curNumber.equals(passCurNumber)){
                                            
                                            String description = null;
                                            int deslocation = j + 25;
                
                                            for (int l = deslocation; l < jsonInString.length(); l++) {
                                                char temp5 = jsonInString.charAt(l);
                                            
                                                if(temp5 == '"'){
                                                    description = jsonInString.substring(deslocation, l);
                                                    l = jsonInString.length();
                                                    numberAndDescription = curNumber + "," + description;
                                                    //System.out.println(numberAndDescription);
                                                    j = location + 20;
                                                    resultList.add(numberAndDescription);
                                                }
                                                
                                            }
                                        } 
                                    }
                                    
                                }
                            }
                            System.out.println(resultList);
                        }
                        curCounter++;
                    }
                }
            }

            //Get Description
        } catch (IOException e) {
            e.printStackTrace();
        }
        return resultList;
    }

    public static String getSpecificTask(String id, String passCurNumber, String taskId){
        String fileName = "Data/Tasks/" + id + "tasks.json";
        String jsonInString = "null";
        String allData = null;

        List<String> resultList = new ArrayList<String>();


        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (Reader reader = new FileReader(fileName)) {

            int taskCounter = 0; 

            // Convert JSON to JsonElement, and later to String
            JsonElement json = gson.fromJson(reader, JsonElement.class);

            jsonInString = gson.toJson(json);

            //Find curriculum numbers
            String taskNumber = null;

            for (int i = 0; i < jsonInString.length(); i++) {
                final char taskFinder = jsonInString.charAt(i);
    
                if (taskFinder == 'T') {
                    char temp = jsonInString.charAt(i + 1);
                   
                    if(temp == 'a'){
                       
                        if(taskCounter != 0){
                            int location = i+14;
                            
                            for (int j = location; j < location + 15; j++) {
                                char temp2 = jsonInString.charAt(j);

                                if(temp2 == '"'){
                                    char temp3 = jsonInString.charAt(j + 1);
                                    
                                    if(temp3 == ','){
                                        taskNumber = jsonInString.substring(location, j);

                                        if(taskNumber.equals(taskId)){
                                            System.out.println("inside");
                                            String curriculum = null;
                                            int curLocation = j+24;
                                            
                                            System.out.println(curLocation);

                                            for (int l = curLocation; l < jsonInString.length(); l++) {
                                                char temp5 = jsonInString.charAt(l);
                                               
                                                if(temp5 == ']'){
                                                    curriculum = jsonInString.substring(curLocation, l+1);
                                                    //System.out.println(curriculum);

                                                    String description = null;
                                                    int desLocation = l+25;

                                                    for (int m = desLocation; m < jsonInString.length(); m++) {
                                                        char temp6 = jsonInString.charAt(m);
                                                        
                                                        if(temp6 == '"'){
                                                            description = jsonInString.substring(desLocation, m);
                                                            allData = "[" + '"' + taskNumber + '"' + "," + curriculum + "," + '"' + description + '"' + " ]";
                                                            //resultList.add(allData);
                                                            i = jsonInString.length();
                                                            j = location + 20;
                                                            l = jsonInString.length();
                                                            m = jsonInString.length();
                                                        }
                                                    } 
                                                }
                                                
                                            }
                                        } 
                                    }
                                    
                                }
                            }
                            //System.out.println(resultList);
                        }
                        taskCounter++;
                    }
                }
            }

            //Get Description
        } catch (IOException e) {
            e.printStackTrace();
        }
        return allData;
    }

    //Returns tasks associated with class
    public static String getTask(String id, String taskId) {
    
        String fileName = "Data/Tasks/" + taskId + "tasks.json";
        String jsonInString = "null";

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (Reader reader = new FileReader(fileName)) {

            // Convert JSON to JsonElement, and later to String
            JsonElement json = gson.fromJson(reader, JsonElement.class);

            jsonInString = gson.toJson(json);

            //System.out.println(jsonInString);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return (jsonInString);
    }
}