package com.a2z.user_service.mapper;

import com.a2z.user_service.model.dto.UserDetailsDto;
import com.a2z.user_service.model.entity.User;

import java.util.ArrayList;
import java.util.HashSet;

public class UserMapper {

    public static UserDetailsDto usersMapToUserDetailsDto(User user, UserDetailsDto userDetailsDto) {
//        userDetailsDto.setId(user.getUserId());
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
        user.setPassword(userDetailsDto.getPassword());
        user.setRoles(new HashSet<>(userDetailsDto.getRoles()));

        user.setPassword(userDetailsDto.getPassword());

        return user;
    }
}
