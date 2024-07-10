package com.spring.angular.controllers;

import com.spring.angular.exceptions.BadRequestException;
import com.spring.angular.models.User;
import com.spring.angular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@CrossOrigin (origins = "http://localhost:8081")
@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?>register(@RequestBody User registerUser){
        User user = userService.findByUsername(registerUser.getUsername());
        if(user != null){
            return ResponseEntity.badRequest().build();
        }
        user = userService.save(registerUser);
        return ResponseEntity.created(URI.create("/api/users"+ registerUser.getId())).body(registerUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?>login(@RequestBody User loginUser){
        User user = userService.findByUsername(loginUser.getUsername());
        if (user == null || !user.getPassword().equals(loginUser.getPassword())){
            try {
                throw new BadRequestException("Unable to Login");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }
        return ResponseEntity.ok().build();
    }

}
