package com.facilsolucoes.challenge.tests.factory;

import java.util.Date;

import com.facilsolucoes.challenge.entities.Contracts;
import com.facilsolucoes.challenge.entities.dto.ContractsDTO;

public class ContractsFactory {

	public static Contracts createContracts() {
		return new Contracts(1L, "Prestação de Serviço", 1000.0, Date.from(null));
	}
	
	public static ContractsDTO createContractsDTO() {
		return new ContractsDTO(createContracts());
	}
}
