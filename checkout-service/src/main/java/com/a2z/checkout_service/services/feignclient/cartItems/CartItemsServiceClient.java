package com.a2z.checkout_service.services.feignclient.cartItems;

import com.a2z.checkout_service.model.dto.CartItemRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.*;

@FeignClient("cart-service")
public interface CartItemsServiceClient {

    @GetMapping(value = "/api/admin/cart/{productId}", consumes = "application/json")
    public List<CartItemRequest> getCartItems();
}
