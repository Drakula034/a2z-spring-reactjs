package com.a2z.customer_service.controller;

import com.a2z.customer_service.mapper.AddressMapper;
import com.a2z.customer_service.modal.dto.address.AddressResponseDto;
import com.a2z.customer_service.modal.dto.address.AddressRequestDto;
import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.services.AddressService;
import com.a2z.customer_service.services.CustomerAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("api/customer/address")
public class AddressController {
    @Autowired
    private AddressService addressService;
    @Autowired
    private CustomerAuthenticationService customerAuthenticationService;
    @Autowired private AddressMapper addressMapper;


    @GetMapping("/all")
    public ResponseEntity<List<AddressResponseDto>> getAllAddress(@RequestParam String customerId){
//        Customer customer = new Customer(Integer.parseInt(customerId));
//        boolean isAuthenticated = customerAuthenticationService.isAuthenticated(customer);
        List<AddressResponseDto>addresses = addressService.getAllAddress(customerId);

        return ResponseEntity.status(HttpStatus.OK).body(addresses);

    }

    @PostMapping("/add")
    public ResponseEntity<Integer> addAddress(@RequestBody AddressRequestDto addressRequestDto){

        Address address = addressMapper.addressRequestDtoMapToAddress(addressRequestDto, new Address());
        Integer savedAddressId = addressService.addAddress(address);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAddressId);
    }


}
