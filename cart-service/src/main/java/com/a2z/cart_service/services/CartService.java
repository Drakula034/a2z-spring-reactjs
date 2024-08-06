package com.a2z.cart_service.services;

import com.a2z.cart_service.model.dto.CartItemDto;
import com.a2z.cart_service.model.entity.CartItem;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {

    Integer addProduct(String productId, String customerId,int quantity);
    List<CartItemDto> getCartItemsOfCustomer(String customerId);
}
