package com.a2z.user_service.service.Impl;

import com.a2z.user_service.model.dto.UserResponseForControl;
import com.a2z.user_service.model.entity.Role;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.repository.RoleRepository;
import com.a2z.user_service.repository.UserRepository;
import com.a2z.user_service.service.UserService;
import jakarta.persistence.EntityManagerFactory;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;


//@AutoConfiguration
@Transactional
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;


    private final int USERS_PER_PAGE = 4;


    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public List<User> getAllUsers() {

        List<User> allUsers = userRepository.findAll();
        return allUsers;
    }

    @Override
    public List<User> getAllUsersByPage(int page) {
        Pageable pageable = PageRequest.of(page-1, USERS_PER_PAGE);
        Page<User> pageUsers = (Page<User>) userRepository.findAll(pageable);
        return pageUsers.getContent();
    }

    private void setUserFieldsForCreateAndUpdate(User sourceUser, User targetUser){
        targetUser.setEmail(sourceUser.getEmail());
        targetUser.setFirstName(sourceUser.getFirstName());
        targetUser.setLastName(sourceUser.getLastName());
        targetUser.setPassword(sourceUser.getPassword());
        targetUser.setMobileNumber(sourceUser.getMobileNumber());
        targetUser.setPhotos(sourceUser.getPhotos());
        targetUser.setEnabled(sourceUser.getEnabled());
    }

    public boolean createNewUser(User user) {
        try {
            Set<Role> roles = user.getRoles();

            User newUser = new User();
            setUserFieldsForCreateAndUpdate(user, newUser);

// Save user information to 'users' database
            User savedUser = userRepository.save(newUser);
            savedUser.setRoles(roles);
            userRepository.save(savedUser);
        } catch (Exception ex) {
            // Handle any exceptions that may occur during the save operation
            ex.printStackTrace(); // Log or handle the exception appropriately
            return false; // Return false to indicate failure
        }
        return true;
    }

    @Override
    public boolean updateUser(User user) {

         Optional<User> existingUserOptional = userRepository.findById(user.getUserId());
         if(existingUserOptional.isPresent()){
             User existingUser = existingUserOptional.get();
             setUserFieldsForCreateAndUpdate(user, existingUser);

             User savedUser = userRepository.save(existingUser);
             Set<Role> roles = user.getRoles();
             savedUser.setRoles(roles);
             userRepository.save(savedUser);
             return true;
         }
        return false;
    }

    public boolean checkDuplicateEmail(String email) {
        User user = userRepository.findByEmail(email);
//        System.out.println("checkDuplicate:" + user);
        return user != null && user.getUserId() >= 0;
    }

    @Override
    public Optional<User> getUserById(String id) {
        Optional<User> user = userRepository.findById(Integer.parseInt(id));
        return user;
    }

    @Override
    public Optional<User> editUserInfo(User user, String userId) {
        Optional<User> getUserOptional = userRepository.findById(Integer.parseInt(userId));


        User updatedUser = null;
        if (getUserOptional.isPresent()) {
            // Get the user object from the Optional
            User existingUser = getUserOptional.get();

            // Update user details only if they are not empty or null
            if (user.getFirstName() != null && !user.getFirstName().isEmpty()) {
                existingUser.setFirstName(user.getFirstName());
            }
            if (user.getLastName() != null && !user.getLastName().isEmpty()) {
                existingUser.setLastName(user.getLastName());
            }
            if (user.getEmail() != null && !user.getEmail().isEmpty()) {
                existingUser.setEmail(user.getEmail());
            }
            if (user.getPassword() != null && !user.getPassword().isEmpty()) {
                existingUser.setPassword(user.getPassword());
            }
            if (user.getMobileNumber() != null && !user.getMobileNumber().isEmpty()) {
                existingUser.setMobileNumber(user.getMobileNumber());
            }

            if (user.getEnabled() != existingUser.getEnabled()) {
                existingUser.setEnabled(user.getEnabled());
            }

            // Save the updated user to the repository
            updatedUser = userRepository.save(existingUser);

            if (user.getRoles().size() > 0) {
                Set<Role> roles = existingUser.getRoles();
                roles.clear();
                for (Role role : user.getRoles()) {
                    // Retrieve the role entity from the database based on the role name
                    Role existingRole = roleRepository.findByName(role.getName());
                    if (existingRole != null) {
                        // Create association between user and role
                        updatedUser.addRole(existingRole);
                    }
                }
                // Update the user with the associations
                userRepository.save(updatedUser);
            }
            return Optional.of(updatedUser);
        } else {
            // User with the provided ID not found
            return Optional.empty();
        }
    }

    @Override
    public boolean deleteUser(Integer userId) {
        Optional<User> getUser = userRepository.findById(userId);
        if (getUser.isPresent()) {
            User user = getUser.get();
            Set<Role> roles = user.getRoles();

            roles.clear();
            userRepository.save(user);

            // Delete the user from the database
            userRepository.delete(user);

            return true; // Deletion successful
        }
        return false;
    }

    @Override
    public UserResponseForControl getEnabledAndDisabledUserForControlPanel() {
        List<User> allUsers = userRepository.findAll();
        int enabled = (int) allUsers.stream().filter(User::getEnabled).count();
        int disabled = allUsers.size() - enabled;

        return new UserResponseForControl(enabled, disabled);
    }

    @Override
    public boolean toggleUserStatus(Integer userId) {
        User user = userRepository.findById(userId).get();
        user.setEnabled(!user.getEnabled());
        User savedUser = userRepository.save(user);
        if(savedUser.getUserId() > 0)return true;
        return false;
    }

}
