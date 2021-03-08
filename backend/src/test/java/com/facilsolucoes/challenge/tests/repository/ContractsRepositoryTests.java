package com.facilsolucoes.challenge.tests.repository;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.facilsolucoes.challenge.entities.Contracts;
import com.facilsolucoes.challenge.repositories.ContractsRepository;
import com.facilsolucoes.challenge.tests.factory.ContractsFactory;

@DataJpaTest
public class ContractsRepositoryTests {

	@Autowired
	private ContractsRepository repository;
	
	private long existingId;
	private long nonExistingId;
	
	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 1000L;
	}
	
	@Test
	void deleteShouldDeleteObjectIfIdExists() {
		
		repository.deleteById(existingId);
		
		Optional<Contracts> result = repository.findById(existingId);
		
		Assertions.assertFalse(result.isPresent());	
	}
	
	@Test
	void deleteShouldThrowsEmpObjectIfIdExists() {
		
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(nonExistingId);	
		});
	}
	
	
}
