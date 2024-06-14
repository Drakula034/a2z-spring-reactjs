package com.a2z.user_service.model.dto;

import com.a2z.user_service.model.entity.Role;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Setter
@Getter

public class UserCreateDto {
//    private Integer id;

    @Column(length = 64, nullable = false, unique = true)
    private String email;
    @Column(name = "first_name", length = 40, nullable = false)
    private String firstName;
    @Column(name = "last_name", length = 40, nullable = false)
    private String lastName;

    @Column(nullable = false)
    @Size(min = 6, max = 12)
    private String password;

    @Column(nullable = false)
    @Size(min = 10, max = 10)
    private String mobileNumber;
    @Column(length = 64)
    private String photos;
    @Column(nullable = false)
    private boolean enabled;
    private List<String> roles;

    public boolean getEnabled() {
        return enabled;
    }
}
