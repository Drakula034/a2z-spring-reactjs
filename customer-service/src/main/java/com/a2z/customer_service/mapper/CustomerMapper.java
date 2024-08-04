package com.a2z.customer_service.mapper;

import com.a2z.customer_service.modal.dto.CustomerInfoResponseDto;
import com.a2z.customer_service.modal.dto.CustomerRequestDto;
import com.a2z.customer_service.modal.dto.CustomerResponseDtoForMainPage;
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
    public CustomerResponseDtoForMainPage customerMapToCustomerResponseDtoForMainPage(Customer customer, CustomerResponseDtoForMainPage customerRequestDtoForMainPage){
        customerRequestDtoForMainPage.setCustomerId(customer.getId());
        customerRequestDtoForMainPage.setFirstName(customer.getFirstName());

        return customerRequestDtoForMainPage;
    }

    public CustomerInfoResponseDto customerMapToCustomerInfoResponseDto(Customer customer,
                                                                        CustomerInfoResponseDto customerInfoResponseDto){
        customerInfoResponseDto.setCustomerId(customer.getId());
        customerInfoResponseDto.setFirstName(customer.getFirstName());
        customerInfoResponseDto.setLastName(customer.getLastName());
        customerInfoResponseDto.setEmail(customer.getEmail());
        customerInfoResponseDto.setPhoneNumber(customer.getPhoneNumber());

        return customerInfoResponseDto;
    }
}
