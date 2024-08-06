package com.a2z.customer_service.services.impl;

import com.a2z.customer_service.mapper.AddressMapper;
import com.a2z.customer_service.modal.dto.address.AddressResponseDto;
import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.repository.AddressRepository;
import com.a2z.customer_service.repository.CustomerRepository;
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
    @Autowired
    private CustomerRepository customerRepository;

    public List<AddressResponseDto> getAllAddress(String customerId) {
        Customer customer = new Customer(Integer.parseInt(customerId));
        List<Address> addresses = addressRepository.findByCustomer(customer);
        List<AddressResponseDto> addressDtoList = new ArrayList<AddressResponseDto>();
        addresses.forEach(address -> {
            addressDtoList.add(addressMapper.addressmapToAddressDto(address, new AddressResponseDto()));

        });
        return addressDtoList;
    }

    @Override
    public AddressResponseDto getDefaultAddress(String customerId) {
        Address address = addressRepository.findDefaultByCustomer(Integer.parseInt(customerId));
        return addressMapper.addressmapToAddressDto(address, new AddressResponseDto());
    }

    @Override
    public AddressResponseDto getAddress(Integer addressId, Integer customerId) {
        Address address = addressRepository.findByAddressIdAndCustomerId(addressId, customerId);
        return addressMapper.addressmapToAddressDto(address, new AddressResponseDto());
    }

    @Override
    public boolean setDefaultAddress(Integer defaultAddressId, Integer customerId) {
        return false;
    }

    @Override
    public Integer addAddress(Address address) {
        Address savedAddress = addressRepository.save(address);
        return savedAddress.getId();
    }
}
