package com.myapp.juvmark;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.nio.file.Files;

import com.google.gson.Gson;
import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;

public class CreateClassDataSorting {
    static String classcode;
    static String date;
    static String savedname;
    static String csvCurriculumPath;
    static String JSONTaskPath;

    static Gson taskJSON = new Gson();

    public static void setClasscode(final String passedClasscode) {
        classcode = passedClasscode;
    }

    public static void setDate(final String passedDate) {
        date = passedDate;
    }

    public static void setSavedname() {
        savedname = classcode.concat("_").concat(date);
        csvCurriculumPath = "Data/Curriculums/" + savedname + "curriculum.csv";
        JSONTaskPath = "Data/Tasks/" + savedname + "tasks.json";
    }

    public static void getCurriculum(final String passedCurriculum) {
        String curriculumNumber;
        String description;

        // Find underscore
        for (int i = 0; i < passedCurriculum.length(); i++) {
            final char underscoreFinder = passedCurriculum.charAt(i);
            int underscoreLocation = i;

            if (underscoreFinder == '_') {
                underscoreLocation = i;
                curriculumNumber = passedCurriculum.substring(0, underscoreLocation);
                description = passedCurriculum.substring(underscoreLocation + 1);

                // Creates csv file, then writes to it.
                try {
                    final FileWriter fw = new FileWriter(csvCurriculumPath, true);
                    final BufferedWriter bw = new BufferedWriter(fw);
                    final PrintWriter pw = new PrintWriter(bw);

                    pw.println(curriculumNumber + "," + description + "_curriculum");
                    pw.flush();
                    pw.close();

                    System.out.println("Successfully interacted with CSV");
                } catch (final IOException e) {
                    System.out.println("Error with CSV");
                }
            }
        }

    }

    // Accepts passed in tasks
    public static void getTasks(final String passedTasks) {
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
<<<<<<< HEAD
                }
                System.out.println(description);
=======
                } 
                //System.out.println(curriculumNumbersArray[]);
                //System.out.println(description);
>>>>>>> 17e76137c66fafeb48d7bae1f6d6028ec213eca9
            }
        }
        System.out.println("Here");

        JsonObject taskDetails = new JsonObject();
        taskDetails.addProperty("Task Number", tasknumber);
        taskDetails.addProperty("Curriculums", curriculumNumbers);
        taskDetails.addProperty("Description", description);

        JsonObject taskObject = new JsonObject();
        taskObject.add(tasknumber, taskDetails);

        JsonObject taskList = new JsonObject();
        taskList.add("Tasks", taskObject);
        System.out.println(taskList.toString());

        try {
            Writer writer = new FileWriter(JSONTaskPath);
            taskJSON.toJson(taskList, writer);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        } 
    }
}