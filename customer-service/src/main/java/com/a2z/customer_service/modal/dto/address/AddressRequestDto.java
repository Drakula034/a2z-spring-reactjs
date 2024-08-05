package com.a2z.customer_service.modal.dto.address;

import com.a2z.customer_service.modal.entity.Customer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressRequestDto {
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
    private Integer customerId;

    public String toString(){
        return "AddressRequestDto{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", addressLine1='" + addressLine1 + '\'' +
                ", addressLine2='" + addressLine2 + '\'' +
                ", countryId='" + countryId + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", defaultAddress=" + defaultAddress +
                ", customer=" + customerId +
                '}';
    }
}
