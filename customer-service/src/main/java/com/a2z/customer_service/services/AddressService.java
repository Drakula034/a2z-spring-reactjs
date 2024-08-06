package com.a2z.customer_service.services;

import com.a2z.customer_service.modal.dto.address.AddressResponseDto;
import com.a2z.customer_service.modal.entity.Address;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {

    public List<AddressResponseDto> getAllAddress(String customerId);
    AddressResponseDto getDefaultAddress(String customerId);
    AddressResponseDto getAddress(Integer addressId, Integer customerId);

    boolean setDefaultAddress(Integer defaultAddressId, Integer customerId);

    Integer addAddress(Address address);
}
