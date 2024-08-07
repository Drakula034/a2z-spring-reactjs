package com.a2z.user_service.controller.admin.api;

import com.a2z.user_service.exceptions.EmailFoundException;
import com.a2z.user_service.exceptions.UserNotFoundException;
import com.a2z.user_service.mapper.UserMapper;
import com.a2z.user_service.model.dto.UserCreateDto;
import com.a2z.user_service.model.dto.UserDetailsDto;
import com.a2z.user_service.model.dto.UserResponseForControl;
import com.a2z.user_service.model.dto.UserUpdateDto;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.service.UserService;

import com.a2z.user_service.service.util.UserServiceHelper;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validator;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.sql.Update;
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
//@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;
    private final UserServiceHelper userServiceHelper;
//    @Autowired
//    private Validator validator;


    @Autowired
    public UserController(UserService userService, UserMapper userMapper, UserServiceHelper userServiceHelper) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.userServiceHelper = userServiceHelper;
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

    @GetMapping("/")
    public ResponseEntity<List<UserDetailsDto>> getAllUsersByPage(@RequestParam(defaultValue = "0") Integer page) {

        List<User> allUsers = userService.getAllUsersByPage(page);
        List<UserDetailsDto> allUsersDetailsDto = new ArrayList<>();
        allUsers.forEach(user -> allUsersDetailsDto.add(UserMapper.usersMapToUserDetailsDto(user, new UserDetailsDto())));
        System.out.println("fetching data");
        return ResponseEntity.status(HttpStatus.OK).body(allUsersDetailsDto);
    }

    @PostMapping("/create")
    public ResponseEntity<Boolean> createNewUser(@RequestBody UserCreateDto userCreateDto) {
        boolean emailExists = userServiceHelper.checkEmailUniquness(userCreateDto.getEmail());
        if (emailExists) {
            throw new EmailFoundException("Email is already registered.");
        }
        User user = userMapper.userCreateDtoMapToUser(userCreateDto, new User());

        boolean isUserCreated = userService.createNewUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(isUserCreated);
    }

    @PutMapping("/update")
    public ResponseEntity<Boolean> updateUser(@RequestBody UserUpdateDto userUpdateDto){
        if (userUpdateDto.getUserId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
//        Set<ConstraintViolation<UserUpdateDto>> violations = validator.validate(userUpdateDto, Update.class);
//        if (!violations.isEmpty()) {
//            throw new ConstraintViolationException(violations);
//        }
        User user = userMapper.userUpdateDtoMapToUser(userUpdateDto, new User());
        boolean isUpdated = userService.updateUser(user);


        if(isUpdated)return ResponseEntity.status(HttpStatus.OK).build();

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();


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

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer userId) {
       try {
            boolean isDeletionSuccessful = userService.deleteUser(userId);
            if (isDeletionSuccessful) {
                return ResponseEntity.status(HttpStatus.OK).body("Deletion Successful");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User ID not found");
            }
        } catch (UserNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the user");
        }
    }

    @GetMapping("/control-panel")
    public ResponseEntity<UserResponseForControl> getEnabledAndDisabledUserInfo(){
        UserResponseForControl userResponseForControl = userService.getEnabledAndDisabledUserForControlPanel();

        return ResponseEntity.status(HttpStatus.OK).body(userResponseForControl);
    }

    @PutMapping("/{userId}/toggle-status")
    public ResponseEntity<?> toggleUserStatus(@PathVariable Integer userId){
        boolean toggleSuccessfull = userService.toggleUserStatus(userId);
        if(toggleSuccessfull){
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }


}
