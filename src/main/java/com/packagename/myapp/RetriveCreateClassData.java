package com.packagename.myapp;

public class RetriveCreateClassData{
    static String classcode;
    static String date;
    static String savedname;

    public static void setClasscode(String passedClasscode) {
        classcode = passedClasscode;
    }

    public static void setDate(String passedDate) {
        date = passedDate;
    }

    public static void setSavedname() {
        savedname = classcode.concat("_").concat(date);
    }

    public static void getCurriculum(String passedCurriculum){
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
                System.out.println(curriculumNumber);
                System.out.println(description);
            }
        }

    }

}