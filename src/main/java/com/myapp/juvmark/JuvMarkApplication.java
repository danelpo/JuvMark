package com.myapp.juvmark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan({"controller", "service"})
public class JuvMarkApplication {

	public static void main(String[] args) {
		SpringApplication.run(JuvMarkApplication.class, args);
		TestingClass.Test();
	}

}
