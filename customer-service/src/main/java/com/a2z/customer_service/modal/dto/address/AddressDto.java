package com.a2z.customer_service.modal.dto.address;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String addressLine1;
    private String addressLine2;
    private String countryId;
    private String city;
    private String state;
    private String postalCode;
    private boolean defaultAddress;
//    private Customer customer;
}
