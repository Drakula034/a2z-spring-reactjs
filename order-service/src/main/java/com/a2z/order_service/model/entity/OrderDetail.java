package com.a2z.order_service.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "order_details")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private int Quantity;
    private float productCost;
    private float shippingCost;
    private float unitPrice;
    private float subtotal;

    private String productId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
