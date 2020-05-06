package com.myapp.juvmark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class JuvMarkApplication{

	public static void main(String[] args) {
		DirectoryInitialization.Setup();
		SpringApplication.run(JuvMarkApplication.class, args);
		TestingClass.Test();
	}

}
