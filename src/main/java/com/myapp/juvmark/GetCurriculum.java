package com.myapp.juvmark;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

public class GetCurriculum {

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
}