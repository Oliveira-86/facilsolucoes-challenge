package com.facilsolucoes.challenge.service.exceptions;

public class DatabaseViolationException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public DatabaseViolationException(String msg) {
		super(msg);
	}

}
