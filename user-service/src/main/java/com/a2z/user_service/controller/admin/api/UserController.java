package com.a2z.user_service.controller.admin.api;

import com.a2z.user_service.mapper.UserMapper;
import com.a2z.user_service.model.dto.UserCreateDto;
import com.a2z.user_service.model.dto.UserDetailsDto;
import com.a2z.user_service.model.dto.UserResponseForControl;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.service.UserService;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("/api/admin/users")
@Slf4j
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;


    @Autowired
    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    private final Logger logger = LoggerFactory.getLogger(UserController.class);


    @GetMapping("/all")
    public ResponseEntity<List<UserDetailsDto>> getAllUsers() {
//        logger.info("active");
        List<User> allUsers = userService.getAllUsers();
        List<UserDetailsDto> allUsersDetailsDto = new ArrayList<>();
        allUsers.forEach(user -> allUsersDetailsDto.add(UserMapper.usersMapToUserDetailsDto(user, new UserDetailsDto())));
        System.out.println("fetching data");
        return ResponseEntity.status(HttpStatus.OK).body(allUsersDetailsDto);
    }

    @PostMapping("/create")
    public ResponseEntity<Boolean> createNewUser(@RequestBody UserCreateDto userCreateDto) {
        System.out.println(userCreateDto);
        User user = userMapper.userCreateDtoMapToUser(userCreateDto, new User());
        boolean isUserCreated = userService.createNewUser(user);
//        System.out.println("check: " + isUserCreated);
//        System.out.println(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(isUserCreated);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDetailsDto> getUser(@PathVariable String id) {
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

    @PatchMapping("/edit/{id}")
    public ResponseEntity<UserCreateDto> editUserInfo(@PathVariable String id, @RequestBody UserCreateDto userCreateDto) {
        User user = userMapper.userCreateDtoMapToUser(userCreateDto, new User());
        Optional<User> userOptional = userService.editUserInfo(user, id);
        if (userOptional.isPresent()) {
            User updatedUser = userOptional.get();
            UserCreateDto updatedUserCreateDto = userMapper.userMapToUserCreateDto(updatedUser, new UserCreateDto());
            return ResponseEntity.status(HttpStatus.OK).body(updatedUserCreateDto);

        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id) {
        Integer userId = Integer.parseInt(id);
        boolean isDeleteionSuccessful = userService.deleteUser(userId);

        if (isDeleteionSuccessful) {
            return ResponseEntity.status(HttpStatus.OK).body("Deletion Succesfull");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user id is not found");
    }

    @GetMapping("/control-panel")
    public ResponseEntity<UserResponseForControl> getEnabledAndDisabledUserInfo(){
        UserResponseForControl userResponseForControl = userService.getEnabledAndDisabledUserForControlPanel();

        return ResponseEntity.status(HttpStatus.OK).body(userResponseForControl);
    }


}
