package com.run.webTools;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.run.webTools.domain.Person;

@RestController
@SpringBootApplication
public class BootWebToolsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootWebToolsApplication.class, args);
	}
	
	@RequestMapping(value="/search",produces= {MediaType.APPLICATION_JSON_VALUE})
	public Person search(String personName) {
		return new Person(personName, 28, "成都");
	}
}
