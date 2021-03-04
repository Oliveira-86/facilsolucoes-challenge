package com.facilsolucoes.challenge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facilsolucoes.challenge.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
