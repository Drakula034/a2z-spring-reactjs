package com.a2z.user_service.mapper;

import com.a2z.user_service.model.dto.RoleResponseDto;
import com.a2z.user_service.model.entity.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {

    public static RoleResponseDto roleMapToRoleResponseDto(Role role, RoleResponseDto roleResponseDto){
        roleResponseDto.setRoleId(role.getId());
        roleResponseDto.setRoleName(role.getName());
        roleResponseDto.setDescription(role.getDescription());
        return roleResponseDto;
    }
}
