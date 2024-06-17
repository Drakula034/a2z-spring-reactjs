package com.a2z.customer_service.modal.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerRequestDto {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String secondPassword;

    @Override
    public String toString() {
        return "CustomerRequestDto [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
                + ", password=" + password + ", secondPassword=" + secondPassword + "]";
    }
}
