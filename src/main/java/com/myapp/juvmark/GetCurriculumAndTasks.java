package com.myapp.juvmark;

import java.io.BufferedReader;
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
                            int location = i+22;
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

    //Returns tasks associated with class
    public static String getTask(String id, String taskId) {
    
        String fileName = "Data/Tasks/" + id + "tasks.json";
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