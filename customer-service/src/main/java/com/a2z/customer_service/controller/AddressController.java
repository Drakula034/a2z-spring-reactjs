package com.a2z.customer_service.controller;

import com.a2z.customer_service.modal.dto.AddressDto;
import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.services.AddressService;
import com.a2z.customer_service.services.CustomerAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("api/customer/address")
public class AddressController {
    @Autowired
    private AddressService addressService;
    @Autowired
    private CustomerAuthenticationService customerAuthenticationService;


    @GetMapping("/all")
    public ResponseEntity<List<AddressDto>> getAllAddress(@RequestParam String customerId){
//        Customer customer = new Customer(Integer.parseInt(customerId));
//        boolean isAuthenticated = customerAuthenticationService.isAuthenticated(customer);
        List<AddressDto>addresses = addressService.getAllAddress(customerId);

        return ResponseEntity.status(HttpStatus.OK).body(addresses);

    }
}
