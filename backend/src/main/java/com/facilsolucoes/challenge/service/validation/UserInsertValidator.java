package com.facilsolucoes.challenge.service.validation;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.facilsolucoes.challenge.entities.User;
import com.facilsolucoes.challenge.entities.dto.UserInsertDTO;
import com.facilsolucoes.challenge.repositories.UserRepository;
import com.facilsolucoes.challenge.resource.exceptions.FieldMessage;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {

	@Autowired
	public UserRepository repository;

	@Override
	public void initialize(UserInsertValid ann) {
	}

	@Override
	public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {

		List<FieldMessage> list = new ArrayList<>();

		User user = repository.findByEmail(dto.getEmail());

		if(user != null) {
			list.add(new FieldMessage("email", "Email already exist"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
