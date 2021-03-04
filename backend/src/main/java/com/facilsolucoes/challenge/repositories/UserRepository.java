package com.facilsolucoes.challenge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facilsolucoes.challenge.entities.User;

public interface UserRepository  extends JpaRepository<User, Long>{

	User findByEmail(String email);
}