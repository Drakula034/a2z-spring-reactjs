package com.a2z.checkout_service.utils;

import com.a2z.checkout_service.model.dto.CartItemRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalculateProductCost {

    public static float calculateProductCost(List<CartItemRequest> cartItems){
          float cost = 0.0f;
//        get item cost from productId
//         float productCost = item.getProductId().getCost();
        float productCost = 10;
          for(CartItemRequest cart : cartItems){
              cost += cart.getQuantity() * productCost;
          }
        return cost;
    }

//    public static float calculateProductTotal(List<CartItemRequest> cartItems){
//        float total = 0.0f;
//        for(CartItemRequest cart : cartItems){
//            total += cart.
//        }
//    }
}
