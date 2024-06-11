package com.a2z.user_service.controller.admin;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.a2z.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value = "/api/admin")
public class UserRestController {
    @Autowired
    private UserService userService;
    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/check-email")
    public ResponseEntity<Boolean> checkDuplicateEmail(@RequestBody String requestBody) {
        try {
            // Parse the JSON string
            JsonNode jsonNode = objectMapper.readTree(requestBody);

            // Extract the email address
            String email = jsonNode.get("email").asText();
//            System.out.println("Checking email " + email);

            // Proceed with the rest of the logic (e.g., check for duplicate email)
            boolean isDuplicate = userService.checkDuplicateEmail(email);
//            System.out.println(isDuplicate);

            // Return response
            return ResponseEntity.ok().body(isDuplicate);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle JSON parsing exception
            return ResponseEntity.badRequest().build();
        }
    }
}