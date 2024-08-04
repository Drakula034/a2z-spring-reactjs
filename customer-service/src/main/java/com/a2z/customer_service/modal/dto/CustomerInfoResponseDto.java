package com.a2z.customer_service.modal.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerInfoResponseDto {
    private Integer customerId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;

    public String toString(){
        return "CustomerInfoResponseDto{" +
                "customerId=" + customerId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}
