package com.a2z.cart_service.utils;

import com.a2z.cart_service.model.entity.CartItem;
import com.a2z.cart_service.model.serviceDto.ProductRequestDto;
import com.a2z.cart_service.services.feignclient.ProductServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CalculateSubtotal {
    @Autowired
    ProductServiceClient productServiceClient;

    public float calculateSubTotal(CartItem cartItem){
        String productId = cartItem.getProductId();
        ResponseEntity<ProductRequestDto> response = productServiceClient.getProductByIdForOrderService(productId);

        ProductRequestDto productRequestDto = response.getBody();

        return productRequestDto.getDiscountedPrice() * cartItem.getQuantity();

    }
}
