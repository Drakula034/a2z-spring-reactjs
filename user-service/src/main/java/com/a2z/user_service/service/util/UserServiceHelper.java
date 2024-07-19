package com.a2z.user_service.service.util;

import com.a2z.user_service.repository.UserRepository;
import org.springframework.stereotype.Component;

@Component
public class UserServiceHelper {

    private UserRepository userRepository;

    public boolean checkEmailUniquness(String email){
        return userRepository.findByEmail(email) == null;
    }


}
