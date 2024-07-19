package com.a2z.user_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserUpdateDto extends UserCreateDto{
    private Integer userId;
}
