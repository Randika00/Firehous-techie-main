package com.spring.angular.services;

import com.spring.angular.models.User;
import com.spring.angular.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User save(User user){
        return (User) this.userRepository.save(user);
    }
    public User findByUsername(String username){
        return this.userRepository.findByUsername(username);
    }


}
