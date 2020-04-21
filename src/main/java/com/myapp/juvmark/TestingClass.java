package com.myapp.juvmark;

public class TestingClass {
    
    public static void Test(){
       
        DirectoryInitialization.Setup();
        CreateClassDataSorting.setClasscode("ICS4U");
        CreateClassDataSorting.setDate("2019-2020_2");
        CreateClassDataSorting.setSavedname();
        CreateClassDataSorting.getCurriculum("B4_123456789", 1);
        CreateClassDataSorting.getCurriculum("A2_123456789", 0);
        CreateClassDataSorting.getCurriculum("A3_123456789", 2);
        CreateClassDataSorting.getTasks("T1_A1-B1-C1_des crisp", 1);
        CreateClassDataSorting.getTasks("Q1_A2-A3-B1-C1-C3_descrip", 0);
        CreateClassDataSorting.getTasks("Q2_A2-A3-B3_description", 0);
        CreateClassDataSorting.getTasks("T2_B3-B4-C2-D1_des,cription", 2);
    }
}