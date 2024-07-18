package com.a2z.user_service.service;

import com.a2z.user_service.model.dto.UserResponseForControl;
import com.a2z.user_service.model.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface UserService {

    public List<User> getAllUsers();
    public List<User> getAllUsersByPage(int page);
    public boolean createNewUser(User user);

    public boolean checkDuplicateEmail(String email);

    Optional<User> getUserById(String id);

     Optional<User> editUserInfo(User user, String userId);
     boolean deleteUser(Integer userId);

     UserResponseForControl getEnabledAndDisabledUserForControlPanel();
     boolean toggleUserStatus(Integer userId);

}
