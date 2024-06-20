package com.a2z.order_service.model.entity;

import com.a2z.order_service.enums.OrderStatus;
import com.a2z.order_service.enums.PaymentMethod;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderOnly {

    private Integer id;

    //    whole info will come from customerId
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String postalCode;
    private String country;

    private Date orderTime;
    private float shippingCost;
    private float productCost;
    private float subtotal;
    private float tax;
    private float total;

    private int delivaryDays;
    private Date delivaryDate;
    private PaymentMethod paymentMethod;
    private OrderStatus orderStatus;

    private String customerId;
}
