package com.myapp.juvmark;

public class Curriculum {
    String curriculumNumber;
    String description;

    public String getCurriculumNumber() {
        return curriculumNumber;
    }

    public void setCurriculumNumber(String Number) {
        curriculumNumber = Number;
        System.out.println(curriculumNumber);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String desc) {
        description = desc;
        System.out.println(description);
    }
}