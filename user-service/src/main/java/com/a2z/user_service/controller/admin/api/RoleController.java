package com.a2z.user_service.controller.admin.api;

import com.a2z.user_service.model.dto.RoleResponseDto;
import com.a2z.user_service.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/admin/roles")
//@CrossOrigin(origins = "*")
public class RoleController {
    @Autowired
    RoleService roleService;

    @GetMapping("/all")
    public ResponseEntity<List<RoleResponseDto>> getAllRoles(){
         List<RoleResponseDto> roles = roleService.getAllRoles();
        System.out.println("roles");
         return ResponseEntity.ok(roles);
    }
}
