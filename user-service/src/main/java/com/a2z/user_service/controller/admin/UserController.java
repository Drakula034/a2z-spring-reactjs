package com.a2z.user_service.controller.admin;

import com.a2z.user_service.mapper.UserMapper;
import com.a2z.user_service.model.dto.UserCreateDto;
import com.a2z.user_service.model.dto.UserDetailsDto;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("/api/admin")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public ResponseEntity<List<UserDetailsDto>> getAllUsers() {
        List<User> allUsers = userService.getAllUsers();
        List<UserDetailsDto> allUsersDetailsDto = new ArrayList<>();
        allUsers.forEach(user -> allUsersDetailsDto.add(UserMapper.usersMapToUserDetailsDto(user, new UserDetailsDto())));

        return ResponseEntity.status(HttpStatus.OK).body(allUsersDetailsDto);
    }

    @PostMapping("/create-user")
    public ResponseEntity<Boolean> createNewuser(@RequestBody UserCreateDto userCreateDto){
        System.out.println(userCreateDto);
        User user = UserMapper.userCreateDtoMapToUser(userCreateDto, new User());
        boolean isUserCreated = userService.createNewUser(user);
//        System.out.println("check: " + isUserCreated);
//        System.out.println(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(isUserCreated);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDetailsDto> getUser(@PathVariable String id){
        Optional<User> userOptional = userService.getUserById(id);
        System.out.println(userOptional);

        if (userOptional.isPresent()) {
            // User with the provided ID exists, so extract the user details and return them
            User user = userOptional.get();
            // Convert User entity to UserDetailsDto (you need to implement this conversion)
            UserDetailsDto userDetailsDto = UserMapper.usersMapToUserDetailsDto(user, new UserDetailsDto());
            return ResponseEntity.ok(userDetailsDto);
        } else {
            // User with the provided ID doesn't exist, return an appropriate response
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//                    .body(new UserDetailsDto()); // Empty UserDetailsDto instance
        }

    }

    @PatchMapping("/users/edit/{id}")
    public ResponseEntity<UserCreateDto> editUserInfo(@PathVariable String id, @RequestBody UserCreateDto userCreateDto){
        User user = UserMapper.userCreateDtoMapToUser(userCreateDto, new User());
        Optional<User> userOptional = userService.editUserInfo(user, id);
        if(userOptional.isPresent()){
            User updatedUser = userOptional.get();
            UserCreateDto updatedUserCreateDto = UserMapper.userMapToUserCreateDto(updatedUser, new UserCreateDto());
            return ResponseEntity.status(HttpStatus.OK).body(updatedUserCreateDto);

        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }


}
