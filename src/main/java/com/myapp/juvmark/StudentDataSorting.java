package com.myapp.juvmark;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.sym.Name;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
public class StudentDataSorting {
    static String savedname;
    static String JSONStudentPath;
    
    public static void setSavedname(String className) {
        savedname = className;
        JSONStudentPath = "Data/Students/" + savedname + "students.json";
    }

    public static void createStudentFile(String passedStudent, String taskListName, int number) {
        String studentName = null;
        String email = null;
        String parentEmail = null;
        String studentNumber = null;
        int numberStars = 0;
        int starLocation1 = 0;
        int starLocation2 = 0;
        int starLocation3 = 0;

        // Find stars
        for (int i = 0; i < passedStudent.length(); i++) {
            final char starFinder = passedStudent.charAt(i);

            // First star (1/3)
            if (starFinder == '*' && numberStars == 0) {
                numberStars++;
                starLocation1 = i;
                studentName = passedStudent.substring(0, starLocation1);
            }

            // Second star (2/3)
            if (starFinder == '*' && numberStars == 1 && i != starLocation1) {
                numberStars++;
                starLocation2 = i;
                email = passedStudent.substring(starLocation1 + 1, starLocation2);

            }
            // Third star (3/3)
            if (starFinder == '*' && numberStars == 2 && i != starLocation2) {
                starLocation3 = i;
                parentEmail = passedStudent.substring(starLocation2 + 1, starLocation3);
                studentNumber = passedStudent.substring(starLocation3 + 1);

            }
        }
        System.out.println(studentName);
        System.out.println(email);
        System.out.println(parentEmail);
        System.out.println(studentNumber);

        if(number == 1){
            JsonObject main = new JsonObject();
            JsonObject Student = new JsonObject();
            JsonObject marks = new JsonObject();
        
            Student.addProperty("Name", studentName);
            Student.addProperty("Email", email);
            Student.addProperty("Parent Email", parentEmail);
            Student.addProperty("Student Number", studentNumber);

            //Read class mapping to find task list



            main.add(studentName, Student);

            try {
                FileWriter fw = new FileWriter(JSONStudentPath, true);
                BufferedWriter bw = new BufferedWriter(fw);
                PrintWriter pw = new PrintWriter(bw);
                
                pw.println(main);
                pw.flush();
                pw.close();
    
                System.out.println("Successfully interacted with student JSON File");
            } catch (final IOException e) {
                System.out.println("Error with JSON");
            }   
            

        }
    }
}