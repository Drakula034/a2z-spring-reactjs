package com.a2z.customer_service.services;

import com.a2z.customer_service.modal.entity.Customer;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {

    Integer registerCustomer(Customer customer);
    Customer getCustomerByCustomerId(Integer customerId);
}
