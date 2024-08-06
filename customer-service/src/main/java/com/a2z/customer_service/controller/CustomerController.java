package com.a2z.customer_service.controller;

import com.a2z.customer_service.mapper.CustomerMapper;
import com.a2z.customer_service.modal.dto.CustomerInfoResponseDto;
import com.a2z.customer_service.modal.dto.CustomerRequestDto;
import com.a2z.customer_service.modal.dto.CustomerRequestDtoForLogin;
import com.a2z.customer_service.modal.dto.CustomerResponseDtoForMainPage;
import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.services.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

        int customerId = -1;
        if (customerRequestDto.getPassword().equals(customerRequestDto.getSecondPassword())) {

            Customer customer = CustomerMapper.customerRequestDtoMapToCustomer(customerRequestDto, new Customer());
            try {
                customerId = customerService.registerCustomer(customer);

            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register: " + e.getMessage());
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Passwords do not match");
        }

        String message = customerId > 0 ? Integer.toString(customerId) : "Failed to register";
        return ResponseEntity.status(customerId > 0 ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST).body(message);

    }

    @PostMapping("/login")
    public ResponseEntity<CustomerResponseDtoForMainPage> login(@RequestBody CustomerRequestDtoForLogin customerRequestDtoForLogin) {

        try {
            Customer customer = customerService.validCustomer(customerRequestDtoForLogin.getEmail(), customerRequestDtoForLogin.getPassword());
            if (customer != null) {
                CustomerResponseDtoForMainPage customerRequestDtoForMainPage = customerMapper.customerMapToCustomerResponseDtoForMainPage(customer,
                        new CustomerResponseDtoForMainPage());
                return ResponseEntity.status(HttpStatus.OK).body(customerRequestDtoForMainPage);

            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @GetMapping("/{customerId}")
    public ResponseEntity<CustomerResponseDtoForMainPage> getCustomerInfoForMainPage(@PathVariable Integer customerId) {
        Customer customer = customerService.getCustomerByCustomerId(customerId);
        if (customer == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        CustomerResponseDtoForMainPage customerRequestDtoForMainPage = customerMapper.customerMapToCustomerResponseDtoForMainPage(customer,
                new CustomerResponseDtoForMainPage());
        return ResponseEntity.status(HttpStatus.OK).body(customerRequestDtoForMainPage);
    }

    @GetMapping("/info/{customerId}")
    public ResponseEntity<CustomerInfoResponseDto> getCustomerInfo(@PathVariable Integer customerId) {
        Customer customer = customerService.getCustomerByCustomerId(customerId);
        if (customer == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        CustomerInfoResponseDto customerInfoResponseDto = customerMapper.customerMapToCustomerInfoResponseDto(customer,
                new CustomerInfoResponseDto());

        return ResponseEntity.status(HttpStatus.OK).body(customerInfoResponseDto);

    }

    @GetMapping("exists/{customerId}")
    public ResponseEntity<Boolean> isCustomerExists(@PathVariable Integer customerId) {
        Customer customer = customerService.getCustomerByCustomerId(customerId);
        if(customer.getId() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(true);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
    }
}
