package com.myapp.juvmark;

public class TestingClass {
    
    public static void Test(){
       
        

        DirectoryInitialization.Setup();
        CreateClassDataSorting.setSavedname("MCV4U_2019-2020_4");
        CreateClassDataSorting.setTasks("MCV4U_2019-2020_2","T1_A1-B1-C1_des crisp", 1);
        CreateClassDataSorting.setTasks("MCV4U_2019-2020_2","Q1_A2-A3-B1-C1-C3_descrip", 0);
        CreateClassDataSorting.setTasks("MCV4U_2019-2020_2","Q2_A2-A3-B3_description", 0);
        CreateClassDataSorting.setTasks("MCV4U_2019-2020_2","T2_B3-B4-C2-D1_des,cription", 2);
       //GetCurriculumAndTasks.getCurriculum("ICS4U_2019-2020_2");
       //GetCurriculumAndTasks.getSpecificTask("ICS4U_2019-2020_2", "ICS4U_2019-2020_2", "T7");
       //ListFiles.listTasks("ICS4U_2019-2020_2");
        
        /*
        CreateClassDataSorting.setClasscode("SCH4U");
        CreateClassDataSorting.setDate("2018-2019");
        CreateClassDataSorting.setIndex("2");
        CreateClassDataSorting.setSavedname();
        CreateClassDataSorting.setTasks("T1_A1-B1-C1_des crisp", 1);
        CreateClassDataSorting.setTasks("Q1_A2-A3-B1-C1-C3_descrip", 0);
        CreateClassDataSorting.setTasks("T2_B3-B4-C2-D1_des,cription", 2);
        */
        /*
        CreateClassDataSorting.setClasscode("ICS4U");
        CreateClassDataSorting.setDate("2019-2020_2");
        CreateClassDataSorting.setSavedname();
        CreateClassDataSorting.setCurriculum("B4_123456789", 1);
        CreateClassDataSorting.setCurriculum("A2_123456789", 0);
        CreateClassDataSorting.setCurriculum("A3_123456789", 2);
        CreateClassDataSorting.setTasks("T1_A1-B1-C1_des crisp", 1);
        CreateClassDataSorting.setTasks("Q1_A2-A3-B1-C1-C3_descrip", 0);
        CreateClassDataSorting.setTasks("Q2_A2-A3-B3_description", 0);
        CreateClassDataSorting.setTasks("T2_B3-B4-C2-D1_des,cription", 2);
        
        CreateClassDataSorting.setClasscode("SCH4U");
        CreateClassDataSorting.setDate("2019-2020");
        CreateClassDataSorting.setIndex("2")
        CreateClassDataSorting.setSavedname();
        CreateClassDataSorting.setCurriculum("A1_1234", 1);
        CreateClassDataSorting.setCurriculum("C1_9876", 0);
        CreateClassDataSorting.setCurriculum("C3_987654321", 2);
        */
        //CreateClassDataSorting.getCurriculum();
    }
}