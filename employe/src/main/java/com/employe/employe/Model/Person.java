package com.employe.employe.Model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer PersonId;
	
	@Column(name = "first_name")
	private String first_name;
	
	@Column(name = "last_name")
	private String last_name;
	
	@Column(name = "age")
	private int age;
	
	@ManyToOne
	@JoinColumn(name = "department_id")
	private Department department;
}
