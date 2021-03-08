package com.facilsolucoes.challenge.tests.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.facilsolucoes.challenge.entities.Contracts;
import com.facilsolucoes.challenge.entities.dto.ContractsDTO;
import com.facilsolucoes.challenge.repositories.ContractsRepository;
import com.facilsolucoes.challenge.service.ContractsService;
import com.facilsolucoes.challenge.service.exceptions.ResourceNotFoundException;
import com.facilsolucoes.challenge.tests.factory.ContractsFactory;

@ExtendWith(SpringExtension.class)
public class ContractsServiceTests {
	
	@InjectMocks
	private ContractsService service;
	
	@Mock
	private ContractsRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private Contracts contracts;
	private ContractsDTO contractsDto;
	
	
	
	@BeforeEach
	void setUp() throws Exception {	
		existingId = 1L;
		nonExistingId = 1000L;
		contracts = ContractsFactory.createContracts();
		contractsDto = ContractsFactory.createContractsDTO();
	
		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(contracts));
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(contracts);
		
		Mockito.when(repository.getOne(existingId)).thenReturn(contracts);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);
		
		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		
	}
	
	@Test
	public void findByIdShouldReturnContractsDTO() {
		
		ContractsDTO result = service.findById(existingId);
		
		Assertions.assertNotNull(result);
	}
	
	@Test
	public void findByIdShouldReturnResourceNotFoundExceptionIfDoesNotExistId() {
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});
	}
	
	@Test
	public void upadateShouldReturnContractsDTOIfExistId() {
		
		ContractsDTO result = service.update(existingId, contractsDto);
		
		Assertions.assertNotNull(result);
	}
	
	@Test
	public void updateReturnResourceNotFoundExceptionIfDoesNotExistId() {
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, contractsDto);
		});
	}
	
	@Test
	public void deleteShouldDoNothingWhenExistId() {
		
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});
		
		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}
	
	@Test
	public void deleteShouldthrowsRsourceNotFoudExceptionsWhenDoesNotExistId() {
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});
		
		Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistingId);
	}
	
}
