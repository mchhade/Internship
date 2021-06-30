package com.employe.employe.Model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
public class Department {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false)
	private Integer departmentId;
	
	@Column(name = "departmentName")
	private String departmentName;
	
	@OneToMany(targetEntity =Person.class ,cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "department_id",referencedColumnName = "department_id")
	private Set<Person> persons;
	
}
