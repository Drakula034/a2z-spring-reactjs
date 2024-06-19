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
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    private String customerId;
    private String productId;
    private float subtotal;
    private float tax;
    private float total;

    private int delivaryDays;
    private Date delivaryDate;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    @JoinColumn(name = "order_id")
    private List<OrderDetail> orderDetails = new ArrayList<>();
}
