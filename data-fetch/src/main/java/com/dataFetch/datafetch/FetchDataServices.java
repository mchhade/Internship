package com.dataFetch.datafetch;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FetchDataServices  extends JpaRepository<Person, Long>{
	
	List<Person> findAll();
}
