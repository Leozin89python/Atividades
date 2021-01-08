package com.spring.mongo.resources;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongo.domain.User;

@RestController
@RequestMapping(value="/users")
public class UserResources 	{
	
	/*	pode ser este método abaixo 
	 * 
			@RequestMapping(method=RequestMethod.GET)
	
	 ou este abaixo em uso ambos são verbos http: GET
	 
	 */
	
	@GetMapping
	public ResponseEntity<List<User>> findAll(){
		User Isabela = new User("1", "Isabela Gatinha", "maria@eu.com");
		User Rebeca = new User("2", "Rebeca Amor", "becacoracao@gmail.com");
		List<User> list = new ArrayList<>();
		list.addAll(Arrays.asList(Isabela,Rebeca));
		return ResponseEntity.ok().body(list);
	}
}
