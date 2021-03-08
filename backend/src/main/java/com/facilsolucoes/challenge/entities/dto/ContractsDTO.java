package com.facilsolucoes.challenge.entities.dto;

import java.io.Serializable;
import java.time.Instant;

import com.facilsolucoes.challenge.entities.Contracts;

public class ContractsDTO  implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Double value;
	private Instant date;
	
	public ContractsDTO() {
	}

	public ContractsDTO(Long id, String name, Double value, Instant date) {
		this.id = id;
		this.name = name;
		this.value = value;
		this.date = date;
	}
	
	public ContractsDTO(Contracts entity) {
		id = entity.getId();
		name = entity.getName();
		value = entity.getValue();
		date = entity.getDate();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}
}
