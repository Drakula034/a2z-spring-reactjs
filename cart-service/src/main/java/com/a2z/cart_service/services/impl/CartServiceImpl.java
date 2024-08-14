package com.a2z.cart_service.services.impl;

import com.a2z.cart_service.mapper.CartItemMapper;
import com.a2z.cart_service.model.dto.CartItemDto;
import com.a2z.cart_service.model.entity.CartItem;
import com.a2z.cart_service.model.serviceDto.ProductRequestDto;
import com.a2z.cart_service.repository.CartItemRepository;
import com.a2z.cart_service.services.CartService;
import com.a2z.cart_service.services.feignclient.ProductServiceClient;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {

    @Autowired
    CartItemRepository cartItemRepository;
    @Autowired
    private ProductServiceClient productServiceClient;
    @Autowired
    private CartItemMapper cartItemMapper;

    public Integer addProduct(String productId, String customerId, int quantity) {
//        CartItem cart = cartItemRepository.findCartByCustomerId(customerId);
//        if (cart == null) {
//            cart = new CartItem();
//            cart.setCustomerId(customerId);
//            cartItemRepository.save(cart);
//        }
//
//        CartItem cartItem = cartItemRepository.findByCartItemIdAndProductId(cart, productId);
//        if (cartItem != null) {
//            cartItem.setQuantity(cartItem.getQuantity() + quantity);
//        } else {
//            cartItem = new CartItem();
//            cartItem.setProductId(productId);
//            cartItem.setQuantity(quantity);
//            cartItem.setCart(cart);
//        }
//
//        cartItemRepository.save(cartItem);
//        return cartItem.getQuantity();

        CartItem cartItem = cartItemRepository.findByCustomerIdAndProductId(customerId, productId);

        if (cartItem != null) {
            // Product already in cart, increase quantity
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
        } else {
            // Product not in cart, create new CartItem
            cartItem = new CartItem();
            cartItem.setCustomerId(customerId);
            cartItem.setProductId(productId);
            cartItem.setQuantity(quantity);
        }

        // Save the cart item and return the updated quantity
        return cartItemRepository.save(cartItem).getQuantity();
    }

    @Override
    public Integer decreaseProductCount(String productId, String customerId, int quantity) {
        CartItem cartItem = cartItemRepository.findByCustomerIdAndProductId(customerId, productId);

        if (cartItem != null) {

            int newQuantity = cartItem.getQuantity() - quantity;

            if (newQuantity > 0) {
                // Update the cart item with the new quantity
                cartItem.setQuantity(newQuantity);
                cartItemRepository.save(cartItem);
            }
        }
//        } else {
//            // Product not in cart, create new CartItem
//            cartItem = new CartItem();
//            cartItem.setCustomerId(customerId);
//            cartItem.setProductId(productId);
//            cartItem.setQuantity(quantity);
//        }

        // Save the cart item and return the updated quantity
        return cartItemRepository.save(cartItem).getQuantity();
    }

    public List<CartItemDto> getCartItemsOfCustomer(String customerId) {

        List<CartItem> carts = cartItemRepository.findByCustomerId(customerId);

        return carts.stream().map(cartItem -> CartItemMapper.cartItemMapToCartItemDto(cartItem, new CartItemDto())).toList();

    }


}
