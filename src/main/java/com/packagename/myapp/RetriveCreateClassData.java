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

}