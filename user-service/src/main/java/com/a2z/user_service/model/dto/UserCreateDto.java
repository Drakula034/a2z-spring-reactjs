package com.a2z.user_service.model.dto;

import com.a2z.user_service.model.entity.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Setter
@Getter

@Schema(
        name = "UserCreateDto",
        description = "Dto class for creating new user"
)
public class UserCreateDto {

    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "Provide a valid email address.")
    @NotBlank(message = "Email address is mandatory.")
    private String email;

    @Size(max = 40, message = "First name can be at most 40 characters long")
    @NotBlank(message = "Please enter your first name")
    private String firstName;

    @Size(max = 40, message = "Last name can be at most 40 characters long")
    @NotBlank(message = "Please enter your last name")
    private String lastName;

    @Size(min = 6, max = 12, message = "Password must be between 6 and 12 characters")
    @NotBlank(message = "Please provide password")
    private String password;

    @Size(min = 10, max = 10, message = "Mobile number must be exactly 10 characters")
    @Pattern(regexp = "^\\d{10}$", message = "Mobile number must be exactly 10 digits")
    @NotBlank(message = "Please enter mobile number")
    private String mobileNumber;

    @Size(max = 64, message = "Photos can be at most 64 characters long")
    private String photos;

    private Boolean enabled;

    @NotBlank(message = "Please add at least one role to user")
    private List<String> roles;

    public boolean getEnabled() {
        return enabled;
    }
}
