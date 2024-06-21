package com.a2z.customer_service.mapper;

import com.a2z.customer_service.modal.dto.AddressDto;
import com.a2z.customer_service.modal.entity.Address;
import org.springframework.stereotype.Component;

@Component
public class AddressMapper {

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
}
