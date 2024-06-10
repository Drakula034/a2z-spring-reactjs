package com.a2z.user_service.RoleRepositoryTests;

import com.a2z.user_service.model.entity.Role;
import com.a2z.user_service.repository.RoleRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
@Rollback(false)
public class RoleRepositoryTests {

    @Autowired
    private RoleRepository roleRepository;

    @Test

    public void testAdminRole(){
        // Create a new role
        Role adminRole = new Role();
        adminRole.setName("ADMIN");
        adminRole.setDescription("manage everything");

        // Save the role to the database
        Role savedRole = roleRepository.save(adminRole);

        // Verify that the saved role id is greater than 0
        assertThat(savedRole.getId()).isGreaterThan(0);

        // Verify that the saved role is not null
        Assertions.assertNotNull(savedRole);
        // Verify that the saved role has the correct name
        Assertions.assertEquals("ADMIN", savedRole.getName());
        // Verify that the saved role has the correct description
        Assertions.assertEquals("manage everything", savedRole.getDescription());
    }
}
