package com.a2z.customer_service.mapper;

import com.a2z.customer_service.modal.dto.CustomerRequestDto;
import com.a2z.customer_service.modal.dto.CustomerRequestDtoForMainPage;
import com.a2z.customer_service.modal.entity.Customer;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomerMapper {

    public static Customer customerRequestDtoMapToCustomer(CustomerRequestDto customerRequestDto, Customer customer){
        customer.setFirstName(customerRequestDto.getFirstName());
        customer.setLastName(customerRequestDto.getLastName());
        customer.setEmail(customerRequestDto.getEmail());
        customer.setPassword(customerRequestDto.getPassword());

        return customer;
    }
    public CustomerRequestDtoForMainPage customerMapToCustomerrequestDtoForMainPage(Customer customer, CustomerRequestDtoForMainPage customerRequestDtoForMainPage){
        customerRequestDtoForMainPage.setCustomerId(customer.getId());
        customerRequestDtoForMainPage.setFirstName(customer.getFirstName());

        return customerRequestDtoForMainPage;
    }
}
