package com.a2z.customer_service.modal.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerRequestDtoForMainPage {
    private Integer customerId;
    private String firstName;

    public String toString() {
        return "CustomerRequestDtoForMainPage{" +
                "customerId=" + customerId +
                ", firstName='" + firstName + '\'' +
                '}';
    }
}
