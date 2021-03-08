package com.facilsolucoes.challenge.service;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.facilsolucoes.challenge.entities.Contracts;
import com.facilsolucoes.challenge.entities.dto.ContractsDTO;
import com.facilsolucoes.challenge.repositories.ContractsRepository;
import com.facilsolucoes.challenge.service.exceptions.ResourceNotFoundException;

@Service
public class ContractsService {
	
	@Autowired
	private ContractsRepository contractsRepository;
	

	@Transactional(readOnly=true)
	public Page<ContractsDTO> findAllPaged(	PageRequest pageRequest) {
		Page<Contracts> list = contractsRepository.findAll(pageRequest);
		return list.map(x -> new ContractsDTO(x));
		
	}

	@Transactional(readOnly=true)
	public ContractsDTO findById(Long id) {
		Optional<Contracts> obj = contractsRepository.findById(id);
		Contracts entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found! "));
		return new ContractsDTO(entity);
	}

	@Transactional
	public ContractsDTO insert(ContractsDTO dto) {
		Contracts entity = new Contracts();
		copyDtoToEntity(dto, entity);
		entity = contractsRepository.save(entity);
		return new ContractsDTO(entity);
	}

	@Transactional
	public ContractsDTO update(Long id, ContractsDTO dto) {
		try {
			Contracts entity = contractsRepository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = contractsRepository.save(entity);
			return new ContractsDTO(entity);
			}
		catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException(" Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			contractsRepository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
	
	private void copyDtoToEntity(ContractsDTO dto, Contracts entity) {
		entity.setValue(dto.getValue());
		entity.setDate(dto.getDate());
		
		
		
		
	}
	
}
