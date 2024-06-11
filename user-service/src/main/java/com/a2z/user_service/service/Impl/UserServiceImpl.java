package com.a2z.user_service.service.Impl;

import com.a2z.user_service.model.entity.Role;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.repository.RoleRepository;
import com.a2z.user_service.repository.UserRepository;
import com.a2z.user_service.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<User> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        return allUsers;
    }



    public boolean createNewUser(User user) {
        try {
//            segregate the user info into 2 parts
            User newUser = new User();
            newUser.setEmail(user.getEmail());
            newUser.setFirstName(user.getFirstName());
            newUser.setLastName(user.getLastName());
            newUser.setPassword(user.getPassword());
            newUser.setMobileNumber(user.getMobileNumber());
            newUser.setPhotos(user.getPhotos());
            newUser.setEnabled(user.getEnabled());

// Save user information to 'users' database
            User savedUser = userRepository.save(newUser);

            // Extract roles from the user object
            Set<Role> roles = user.getRoles();

            // Save associations between the user and roles in 'users_roles' table
            for (Role role : roles) {
                // Retrieve the role entity from the database based on the role name
                Role existingRole = roleRepository.findByName(role.getName());
                if (existingRole != null) {
                    // Create association between user and role
                    savedUser.addRole(existingRole);
                }
            }
            // Update the user with the associations
            userRepository.save(savedUser);
        } catch (Exception ex) {
            // Handle any exceptions that may occur during the save operation
            ex.printStackTrace(); // Log or handle the exception appropriately
            return false; // Return false to indicate failure
        }
        return true;
    }

    public boolean checkDuplicateEmail(String email){
        User user = userRepository.findByEmail(email);
//        System.out.println("checkDuplicate:" + user);
        return user != null && user.getUserId() >= 0;
    }

}
