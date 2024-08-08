package com.a2z.cart_service.repository;

import com.a2z.cart_service.model.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

    List<CartItem> findByCustomerId(String customerId);


    public CartItem findByCustomerIdAndProductId(String customerId, String productId);
    @Modifying
    @Query("update CartItem c set c.quantity= ?3 where c.customerId = ?1 and c.productId = ?2")
    void updateQuantity(String customerId, String productId, Integer quantity);

//    CartItem findByCartItemIdAndProductId(CartItem cart, String productId);

    @Query("select c from CartItem c where c.customerId = ?1")
    CartItem findCartByCustomerId(String customerId);
}
