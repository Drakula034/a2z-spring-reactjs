package com.a2z.cart_service.mapper;

import com.a2z.cart_service.model.dto.CartItemDto;
import com.a2z.cart_service.model.entity.CartItem;
import org.springframework.context.annotation.Configuration;


@Configuration
public class CartItemMapper {

    public static CartItemDto cartItemMapToCartItemDto(CartItem cartItem, CartItemDto cartItemDto){
        cartItemDto.setCartId(cartItem.getId());
        cartItemDto.setQuantity(cartItem.getQuantity());
        cartItemDto.setProductId(cartItem.getProductId());
        cartItemDto.setCustomerId(cartItem.getCustomerId());

        return cartItemDto;
    }
}
