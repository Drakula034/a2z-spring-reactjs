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
        CartItem cartItem = cartItemRepository.findByCustomerIdAndProductId(customerId, productId);
        if (cartItem != null) {
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
        } else {
            cartItem = new CartItem();
            cartItem.setCustomerId(customerId);
            cartItem.setProductId(productId);
            cartItem.setQuantity(quantity);


        }
//        ResponseEntity<ProductRequestDto> product = productServiceClient.getProductByIdForOrderService(productId);
//        System.out.println(product.getBody());

        return cartItemRepository.save(cartItem).getQuantity();
    }

    public List<CartItemDto> getCartItemsOfCustomer(String customerId) {

        List<CartItem> carts = cartItemRepository.findByCustomerId(customerId);
        List<CartItemDto> cartsDto = carts.stream().map(cartItem -> CartItemMapper.cartItemMapToCartItemDto(cartItem, new CartItemDto())).toList();

        return cartsDto;

    }


}
