package com.spring.mongo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongo.domain.User;
import com.spring.mongo.repository.UserRepository;
import com.spring.mongo.service.exception.ObjectNotFoundException;

@Service
public class UserServices {

	@Autowired
	private UserRepository repo;
	
	public List<User> findAll(){
		return repo.findAll(); 
	}
  /*
	public User findById(String id) {
		User user = repo.findOne(id);
		if(user == null) {
			throw new  ObjectNotFoundException("usuário não encontrado");
		}
	} */
}
