package com.a2z.customer_service.mapper;

import com.a2z.customer_service.modal.dto.address.AddressDto;
import com.a2z.customer_service.modal.dto.address.AddressRequestDto;
import com.a2z.customer_service.modal.entity.Address;
import com.a2z.customer_service.modal.entity.Customer;
import com.a2z.customer_service.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AddressMapper {

    @Autowired private CustomerRepository customerRepository;

    public AddressDto addressmapToAddressDto(Address address, AddressDto addressDto){
        addressDto.setAddressLine1(address.getAddressLine1());
        addressDto.setAddressLine2(address.getAddressLine2());
        addressDto.setCity(address.getCity());
        addressDto.setState(address.getState());
        addressDto.setCountryId(address.getCountryId());
        addressDto.setPostalCode(address.getPostalCode());
        addressDto.setDefaultAddress(address.isDefaultAddress());
        addressDto.setPhoneNumber(address.getPhoneNumber());
        addressDto.setFirstName(address.getFirstName());
        addressDto.setLastName(address.getLastName());
        return addressDto;

    }

    public Address addressRequestDtoMapToAddress(AddressRequestDto addressRequestDto, Address address){
        address.setAddressLine1(addressRequestDto.getAddressLine1());
        address.setAddressLine2(addressRequestDto.getAddressLine2());
        address.setCity(addressRequestDto.getCity());
        address.setState(addressRequestDto.getState());
        address.setCountryId(addressRequestDto.getCountryId());
        address.setPostalCode(addressRequestDto.getPostalCode());
        address.setDefaultAddress(addressRequestDto.isDefaultAddress());
        address.setPhoneNumber(addressRequestDto.getPhoneNumber());
        address.setFirstName(addressRequestDto.getFirstName());
        address.setLastName(addressRequestDto.getLastName());
        Customer customer = customerRepository.findById(addressRequestDto.getCustomerId()).get();
        address.setCustomer(customer);
        return address;
    }
}
