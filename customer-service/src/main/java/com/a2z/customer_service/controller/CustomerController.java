package com.a2z.customer_service.controller;

import com.a2z.customer_service.mapper.CustomerMapper;
import com.a2z.customer_service.modal.dto.CustomerRequestDto;
import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.services.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerMapper customerMapper;

    public CustomerController(CustomerService customerService, CustomerMapper customerMapper) {
        this.customerService = customerService;
        this.customerMapper = customerMapper;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody CustomerRequestDto customerRequestDto) {
//        System.out.println(customerRequestDto.toString());

        boolean isSuccessful = false;
        if (customerRequestDto.getPassword().equals(customerRequestDto.getSecondPassword())) {

            Customer customer = CustomerMapper.customerRequestDtoMapToCustomer(customerRequestDto, new Customer());
            isSuccessful = customerService.registerCustomer(customer);
        }


        String message = isSuccessful ? "Successfully registered" : "Failed to register";

        return ResponseEntity.status(isSuccessful ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST).body(message);
    }
}
