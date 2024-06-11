package com.a2z.user_service;

import com.a2z.user_service.model.entity.Role;
import com.a2z.user_service.model.entity.User;
import com.a2z.user_service.repository.RoleRepository;
import com.a2z.user_service.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
@Transactional
public class UserRepositoryTests {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    TestEntityManager testEntityManager;

    @Test
    public void createUserTest() {
        Role role = testEntityManager.find(Role.class, 8);
        Role newrole = testEntityManager.find(Role.class, 9);
        User user = new User();
//        System.out.println(user.getRoles());
        user.setEmail("ravi3@test.com");
        user.setFirstName("thor");
        user.setLastName("test");
        user.setPassword("1234568");

        user.addRole(role);
//        user.addRole(newrole);
//        user.setUserId(user.getUserId() + 5);

        User savedUser = userRepository.save(user);

        assertThat(savedUser.getUserId()).isGreaterThan(0);
    }

    @Test
    public void createNewUserWithTwoRolesTest() {
        // Create a new user
        User userWithTwoRole = new User();
        userWithTwoRole.setEmail("stark3@avengers.com");
        userWithTwoRole.setFirstName("thor");
        userWithTwoRole.setLastName("odinson");
        userWithTwoRole.setPassword("12345678");
        userWithTwoRole.setMobileNumber("1234567890");

        // Retrieve roles from the entity manager
        Role roleAdmin = testEntityManager.find(Role.class, 7);
        Role roleEditor = testEntityManager.find(Role.class, 9);

        // Add roles to the user
        userWithTwoRole.addRole(roleEditor);
        userWithTwoRole.addRole(roleAdmin);

        // Print roles information for debugging
        System.out.println("Role 1: " + roleEditor);
        System.out.println("Role 2: " + roleAdmin);

        // Print roles hash codes for debugging
        System.out.println("Role 1 Hash Code: " + System.identityHashCode(roleEditor));
        System.out.println("Role 2 Hash Code: " + System.identityHashCode(roleAdmin));

        // Print user roles for debugging
        System.out.println("User Roles: " + userWithTwoRole.getRoles());

        // Save the user
        User savedUser = userRepository.save(userWithTwoRole);
        System.out.println("Saved User: " + savedUser);

        // Perform assertions if needed
        // assertThat(savedUser.getUserId()).isGreaterThan(0);
    }


    @Test
    public void listAllUserTest() {
        List<User> users = userRepository.findAll();
        users.forEach(user -> System.out.println(user));
    }

    @Test
    public void getUsersById() {
        User user = userRepository.findById(2).get();
        System.out.println(user);
        assertThat(user).isNotNull();

    }

    @Test
    public void updateUserDetails() {
        User user = userRepository.findById(1004).get();
//        System.out.println(user);
        user.setEnabled(false);
        userRepository.save(user);
//        assertThat(user).isNotNull();

    }

    @Test
    public void updateUserRoles(){
        User user = userRepository.findById(1004).get();
        assertNotNull(user);
//        Role newrole = testEntityManager.find(Role.class, 9);
        // Check if the role already exists
            Role editor = new Role(9);
        if (user.getRoles().contains(editor) == false) {
//            user.getRoles().remove();
            userRepository.save(user);
        }
        System.out.println(user.getRoles());
//        user.getRoles().add(newrole);
//        userRepository.save(user);
//        User updatedUser = userRepository.findById(1004).get();
//        assertNotNull(updatedUser);


    }

    @Test
    public void deleteUserTest(){
            Integer userDeleteUser = 1035;
            userRepository.deleteById(userDeleteUser);
    }

    @Test
    public void testUserByEmail(){
        String email = "ravi3@test.com";
        User user = userRepository.findByEmail(email);
        assertThat(user.getUserId()).isNotNull();
//        System.out.println(user);
    }
}
