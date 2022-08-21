package com.poochpals.demo.controller;

import com.poochpals.demo.model.User;
import com.poochpals.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> allUsers() {

        return userService.findAll();
    }

    @GetMapping("/users/count")
    public Long count() {

        return userService.count();
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable String id) {

        Long userId = Long.parseLong(id);
        userService.deleteById(userId);
    }

    @PostMapping("/users/add")
    public void add(@RequestBody User user){
        String firstName = user.getFirstName();
        String lastName = user.getLastName();
        String email = user.getEmail();
        User newUser = new User(firstName, lastName, email);
        userService.add(newUser);
    }

}
