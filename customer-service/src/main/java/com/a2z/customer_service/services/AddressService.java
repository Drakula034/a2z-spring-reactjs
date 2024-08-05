package com.a2z.customer_service.services;

import com.a2z.customer_service.modal.dto.address.AddressDto;
import com.a2z.customer_service.modal.entity.Address;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {

    public List<AddressDto> getAllAddress(String customerId);
    AddressDto getDefaultAddress(String customerId);
    AddressDto getAddress(Integer addressId, Integer customerId);

    boolean setDefaultAddress(Integer defaultAddressId, Integer customerId);

    Integer addAddress(Address address);
}
