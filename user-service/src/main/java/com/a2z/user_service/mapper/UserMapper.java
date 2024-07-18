package com.a2z.user_service.mapper;

import com.a2z.user_service.model.dto.UserCreateDto;
import com.a2z.user_service.model.dto.UserDetailsDto;
import com.a2z.user_service.model.entity.Role;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    private final RoleRepository roleRepository;

    @Autowired
    public UserMapper(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public static UserDetailsDto usersMapToUserDetailsDto(User user, UserDetailsDto userDetailsDto) {
        userDetailsDto.setUserId(user.getUserId());
        userDetailsDto.setEmail(user.getEmail());
        userDetailsDto.setFirstName(user.getFirstName());
        userDetailsDto.setLastName(user.getLastName());
        userDetailsDto.setMobileNumber(user.getMobileNumber());
        userDetailsDto.setPhotos(user.getPhotos());
        userDetailsDto.setEnabled(user.getEnabled());
        userDetailsDto.setRoles(new ArrayList<>(user.getRoles()));

        return userDetailsDto;

    }

    public static User userDetailsDtoMapToUser(UserDetailsDto userDetailsDto, User user) {
        user.setEmail(userDetailsDto.getEmail());
        user.setFirstName(userDetailsDto.getFirstName());
        user.setLastName(userDetailsDto.getLastName());
        user.setMobileNumber(userDetailsDto.getMobileNumber());
        user.setPhotos(userDetailsDto.getPhotos());
        user.setEnabled(userDetailsDto.getEnabled());
//        user.setPassword(userDetailsDto.getPassword());
        user.setRoles(new HashSet<>(userDetailsDto.getRoles()));

//        user.setPassword(userDetailsDto.getPassword());

        return user;
    }

    public UserCreateDto userMapToUserCreateDto(User user, UserCreateDto userCreateDto) {
        userCreateDto.setEmail(user.getEmail());
        userCreateDto.setFirstName(user.getFirstName());
        userCreateDto.setLastName(user.getLastName());
        userCreateDto.setMobileNumber(user.getMobileNumber());
        userCreateDto.setPhotos(user.getPhotos());
        userCreateDto.setEnabled(user.getEnabled());
        List<String> roleList = new ArrayList<>();
        Set<Role>roles = user.getRoles();
        for (Role role : roles) {
            roleList.add(role.getName());
        }
        userCreateDto.setRoles(roleList);

        return userCreateDto;
    }

    public User userCreateDtoMapToUser(UserCreateDto userCreateDto, User user) {
        user.setEmail(userCreateDto.getEmail());
        user.setFirstName(userCreateDto.getFirstName());
        user.setLastName(userCreateDto.getLastName());
        user.setMobileNumber(userCreateDto.getMobileNumber());
        user.setPhotos(userCreateDto.getPhotos());
        user.setEnabled(userCreateDto.getEnabled());
        user.setPassword(userCreateDto.getPassword());
//        List<String> roles = userCreateDto.getRoles();
        List<String> roles = userCreateDto.getRoles();
        Set<Role> roleToAdd = new HashSet<Role>();
        for (String role : roles) {
            Role existingRole = roleRepository.findByName(role);
            if (existingRole != null) {
                roleToAdd.add(existingRole);
            }
        }
        user.setRoles(roleToAdd);

        user.setPassword(userCreateDto.getPassword());

        return user;
//////        Set<Role> roleToAdd = new HashSet<>();
////        Set<Role> roleToAdd = user.getRoles();
////
//        for (String roleName : roles) {
//            Role existingRole = roleRepository.findByName(roleName);
//            if (existingRole != null && !user.getRoles().contains(existingRole)) {
////                roleToAdd.add(existingRole);
//                user.getRoles().add(existingRole);
//            } else {
//                // Handle case where role is already associated with the user
//                System.out.println("Role " + roleName + " is already associated with the user.");
//            }
//        }
//////        System.out.println("Roles to add: " + roleToAdd.stream().map(Role::getName).collect(Collectors.joining(", ")));
////
//////        user.getRoles().addAll(roleToAdd);
//////        user.setRoles(roleToAdd);
//        System.out.println(user.getRoles());
//        user.setPassword(userCreateDto.getPassword());

//        return user;
    }
}
