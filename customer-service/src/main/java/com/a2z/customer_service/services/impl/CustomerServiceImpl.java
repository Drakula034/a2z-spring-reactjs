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
    public Integer registerCustomer(Customer customer) {
        Customer savedCustomer = customerRepository.save(customer);
//        System.out.println(savedCustomer.toString());
        return savedCustomer.getId();
    }

    @Override
    public Customer getCustomerByCustomerId(Integer customerId) {
        return customerRepository.findById(customerId).orElse(null);

    }
}
