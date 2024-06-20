package com.a2z.cart_service.services.impl;

import com.a2z.cart_service.model.entity.CartItem;
import com.a2z.cart_service.repository.CartItemRepository;
import com.a2z.cart_service.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    CartItemRepository cartItemRepository;

    public Integer addProduct(String productId, String customerId, int quantity){
        CartItem cartItem = cartItemRepository.findByCustomerIdAndProductId(customerId, productId);
        if(cartItem != null){
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
        }else{
            cartItem = new CartItem();
            cartItem.setCustomerId(customerId);
            cartItem.setProductId(productId);
            cartItem.setQuantity(quantity);
        }

        return cartItemRepository.save(cartItem).getQuantity();
    }


}
