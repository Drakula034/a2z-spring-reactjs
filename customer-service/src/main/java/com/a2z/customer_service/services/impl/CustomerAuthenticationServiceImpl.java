package com.a2z.customer_service.services.impl;

import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.services.CustomerAuthenticationService;
import org.springframework.stereotype.Service;

@Service
public class CustomerAuthenticationServiceImpl implements CustomerAuthenticationService {

//    rewrite this method
    public boolean isAuthenticated(Customer customer){

        return true;
    }
}
