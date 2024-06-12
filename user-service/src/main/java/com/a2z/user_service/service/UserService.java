package com.a2z.user_service.service;

import com.a2z.user_service.model.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    public List<User> getAllUsers();
    public boolean createNewUser(User user);

    public boolean checkDuplicateEmail(String email);

    Optional<User> getUserById(String id);

     Optional<User> editUserInfo(User user, String userId);
}
