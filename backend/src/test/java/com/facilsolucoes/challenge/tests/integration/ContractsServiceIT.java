package com.facilsolucoes.challenge.tests.integration;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;

import com.facilsolucoes.challenge.service.ContractsService;
import com.facilsolucoes.challenge.service.exceptions.ResourceNotFoundException;

@SpringBootTest
public class ContractsServiceIT {
	
	@Autowired
	private ContractsService service;
		
	private long existingId;
	private long nonExistingId;
	private long countTotalContracts;
	private long countTotalServico;
	private PageRequest pageRequest;
	
	@BeforeEach
	void setUp() throws Exception {	
		existingId = 1L;
		nonExistingId = 1000L;
		countTotalContracts = 12L;
		pageRequest = PageRequest.of(0, 10);
	}
	
	
	
	@Test
	public void deleteShouldthrowsRsourceNotFoudExceptionsWhenDoesNotExistId() {
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});
		
	}
	
	
	@Test
	public void deleteShouldDoNothingWhenExistId() {
		
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});
		
	}
	
}
