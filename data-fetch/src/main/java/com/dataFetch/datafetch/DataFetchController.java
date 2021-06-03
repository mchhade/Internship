package com.dataFetch.datafetch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DataFetchController {
	@Autowired
	FetchDataServices fetchDataServices;
	
	@GetMapping(path = "/getdata")
	List<Person> getPerson(){
	return fetchDataServices.findAll();
	}
}
