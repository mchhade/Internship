package com.employe.employe.Services;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employe.employe.Model.Person;

public interface PersonServices extends JpaRepository<Person,Integer> {

}
