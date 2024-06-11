package com.a2z.user_service.service;

import com.a2z.user_service.model.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    public List<User> getAllUsers();
    public boolean createNewUser(User user);
}
