package com.run.webTools.domain;

/**
 * @author user
 * 传值对象Javabean
 */
public class Person {
	
	private String name;
	private Integer age;
	private String address;
	public Person() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public Person(String name, Integer age, String address) {
		super();
		this.name = name;
		this.age = age;
		this.address = address;
	}

	
	
}
