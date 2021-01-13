package com.spring.mongo.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongo.domain.User;
import com.spring.mongo.dto.UserDTO;
import com.spring.mongo.services.UserServices;

@RestController
@RequestMapping(value="/users")
public class UserResources 	{
	
	/*	pode ser este método abaixo 
	 * 
			@RequestMapping(method=RequestMethod.GET)
	
	 ou este abaixo em uso ambos são verbos http: GET
	 
	 */
	
	@Autowired
	private UserServices service;  
	
	@GetMapping
	public ResponseEntity<List<UserDTO>> findAll(){
		List<User> list = service.findAll();
		List<UserDTO> listDTO = list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList()); 
		return ResponseEntity.ok().body(listDTO);
	}
}
