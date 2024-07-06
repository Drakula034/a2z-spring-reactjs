package com.a2z.user_service.service.Impl;

import com.a2z.user_service.mapper.RoleMapper;
import com.a2z.user_service.model.dto.RoleResponseDto;
import com.a2z.user_service.model.entity.Role;
import com.a2z.user_service.repository.RoleRepository;
import com.a2z.user_service.service.RoleService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    RoleMapper roleMapper;
    @Override
    public List<RoleResponseDto> getAllRoles() {
        List<Role> roles = roleRepository.findAll();
        List<RoleResponseDto>roleResponseDtos = new ArrayList<RoleResponseDto>();
        for(Role role:roles){
            roleResponseDtos.add(RoleMapper.roleMapToRoleResponseDto(role, new RoleResponseDto()));}
        return roleResponseDtos;
    }
}
