package com.a2z.cart_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemDto {

    private Integer cartId;
    private String customerId;
    //    for product info
    private String productId;
    private int quantity;
}
