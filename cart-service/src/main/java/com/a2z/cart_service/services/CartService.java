package com.a2z.cart_service.services;

import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

@Service
public interface CartService {

    Integer addProduct(String productId, String customerId,int quantity);
}
