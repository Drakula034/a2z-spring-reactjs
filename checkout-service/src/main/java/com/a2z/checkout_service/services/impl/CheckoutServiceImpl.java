package com.a2z.checkout_service.services.impl;

import com.a2z.checkout_service.model.dto.CartItemRequest;
import com.a2z.checkout_service.model.entity.CheckoutInfo;
import com.a2z.checkout_service.utils.CalculateProductCost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckoutServiceImpl {
    @Autowired
    CalculateProductCost calculateProductCost;

    public CheckoutInfo prepareCheckout(List<CartItemRequest> cartItems, ShippingRate shippingRate){
        CheckoutInfo checkoutInfo = new CheckoutInfo();
        float productCost = CalculateProductCost.calculateProductCost(cartItems);
        float
        checkoutInfo.setProductCost(productCost);

        return checkoutInfo;

    }


}
