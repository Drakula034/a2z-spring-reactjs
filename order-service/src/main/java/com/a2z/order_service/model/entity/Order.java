package com.a2z.order_service.model.entity;

import com.a2z.order_service.enums.OrderStatus;
import com.a2z.order_service.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.*;

@Entity
@Table(name = "orders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

//    whole info will come from customerId
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "phone_number", length = 100)
    private String phoneNumber;
    @Column(name = "address_line_1")
    private String addressLine1;
    @Column(name = "address_line_2")
    private String addressLine2;
    private String city;
    private String state;
    @Column(name = "postal_code")
    private String postalCode;
    private String country;

    private Date orderTime;
    @Column(name = "shipping_cost")
    private float shippingCost;
    @Column(name = "product_cost")
    private float productCost;
    private float subtotal;
    private float tax;
    private float total;

    private int delivaryDays;
    private Date delivaryDate;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    private String customerId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    @JoinColumn(name = "order_id")
    private List<OrderDetail> orderDetails = new ArrayList<>();
}
