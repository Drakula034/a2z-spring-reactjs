package com.a2z.checkout_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemRequest {

    private String customerId;
    //    for product info
    private String productId;
    private int quantity;
}
