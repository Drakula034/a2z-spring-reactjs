package com.a2z.user_service.model.dto;

import com.a2z.user_service.validation.ValidPassword;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserUpdateDto extends UserCreateDto{
    private Integer userId;

    @Size(min = 6, max = 12, message = "Password must be between 6 and 12 characters")
//    @ValidPassword
    private String password;
}
