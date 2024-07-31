package com.a2z.customer_service.services.impl;

import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.repository.CustomerRepository;
import com.a2z.customer_service.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;
    @Override
    public boolean registerCustomer(Customer customer) {
        Customer savedCustomer = customerRepository.save(customer);
//        System.out.println(savedCustomer.toString());
        return savedCustomer.getId() > 0;
    }
}
