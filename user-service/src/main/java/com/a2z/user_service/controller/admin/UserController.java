package com.a2z.user_service.controller.admin;

import com.a2z.user_service.mapper.UserMapper;
import com.a2z.user_service.model.dto.UserDetailsDto;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

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
    public ResponseEntity<Boolean> createNewuser(@RequestBody UserDetailsDto userDetailsDto){
        System.out.println(userDetailsDto);
        User user = UserMapper.userDetailsDtoMapToUser(userDetailsDto, new User());
        boolean isUserCreated = userService.createNewUser(user);
//        System.out.println("check: " + isUserCreated);
//        System.out.println(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(isUserCreated);
    }


}
