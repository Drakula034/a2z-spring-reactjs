package com.a2z.customer_service.services.impl;

import com.a2z.customer_service.mapper.AddressMapper;
import com.a2z.customer_service.modal.dto.AddressDto;
import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.repository.AddressRepository;
import com.a2z.customer_service.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private AddressMapper addressMapper;

    public List<AddressDto> getAllAddress(String customerId) {
        Customer customer = new Customer(Integer.parseInt(customerId));
        List<Address> addresses = addressRepository.findByCustomer(customer);
        List<AddressDto>addressDtoList = new ArrayList<AddressDto>();
        addresses.forEach(address -> {
            addressDtoList.add(addressMapper.addressmapToAddressDto(address, new AddressDto()));

        });
        return addressDtoList;
    }
}
