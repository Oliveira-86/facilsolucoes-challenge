package com.facilsolucoes.challenge.tests.factory;

import java.time.Instant;

import com.facilsolucoes.challenge.entities.Contracts;
import com.facilsolucoes.challenge.entities.dto.ContractsDTO;

public class ContractsFactory {

	public static Contracts createContracts() {
		return new Contracts(1L, "Prestação de Serviço", 1000.0, Instant.parse("2020-02-02T00:00:00Z"));
	}
	
	public static ContractsDTO createContractsDTO() {
		return new ContractsDTO(createContracts());
	}
}
