package com.a2z.customer_service.modal.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerRequestDto extends CustomerRequestDtoForLogin {

    private String firstName;
    private String lastName;
    private String secondPassword;

    public String getSecondPassword() {
        return secondPassword;
    }

    public void setSecondPassword(String secondPassword) {
        this.secondPassword = secondPassword;
    }

    @Override
    public String toString() {
        return "CustomerRequestDto{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + getEmail() + '\'' +
                ", password='" + getPassword() + '\'' +
                ", secondPassword='" + secondPassword + '\'' +
                '}';
    }
}
