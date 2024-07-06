package com.a2z.user_service.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleResponseDto {

    private Integer roleId;
    private String roleName;
    private String description;
}
