package com.myapp.juvmark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

<<<<<<< HEAD
@Configuration
@EnableAutoConfiguration
@ComponentScan({"controller", "service"})
public class JuvMarkApplication {
=======
@SpringBootApplication
public class JuvMarkApplication{
>>>>>>> df4f9357618d2c0d75b1f6ccef04a4402e8906b6

	public static void main(String[] args) {
		SpringApplication.run(JuvMarkApplication.class, args);
		TestingClass.Test();
	}

}
