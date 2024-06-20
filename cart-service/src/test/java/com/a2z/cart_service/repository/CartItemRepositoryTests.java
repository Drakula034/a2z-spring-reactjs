package com.a2z.cart_service.repository;

import com.a2z.cart_service.model.entity.CartItem;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.relational.core.sql.In;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class CartItemRepositoryTests {

    @Autowired CartItemRepository cartItemRepository;

    @Test
    public void addItemTest(){
        String customerId = "1";
        String productId = "2";

        CartItem cartItem = new CartItem();
        cartItem.setCustomerId(customerId);
        cartItem.setProductId(productId);
        cartItem.setQuantity(1);

        CartItem savedItem = cartItemRepository.save(cartItem);
        assertThat(savedItem.getId()).isGreaterThan(0);
    }

    @Test
    public void addMultipleItemTest(){
        String customerId = "2";
        String productId1 = "2";
        String productId2 = "1";

        CartItem cartItem1 = new CartItem();
        cartItem1.setCustomerId(customerId);
        cartItem1.setProductId(productId1);
        cartItem1.setQuantity(2);

        CartItem cartItem2 = new CartItem();
        cartItem2.setCustomerId(customerId);
        cartItem2.setProductId(productId2);
        cartItem2.setQuantity(3);


        Iterable<CartItem> savedItem = cartItemRepository.saveAll(List.of(cartItem1, cartItem2));
        assertThat(savedItem).size().isGreaterThan(0);
    }

    @Test
    public void findCartByCustomerIdTest(){
        String customerId = "2";
        List<CartItem> carts = cartItemRepository.findByCustomerId(customerId);
        carts.forEach(cart -> System.out.println(cart));
        assertThat(carts).size().isEqualTo(2);
    }

    @Test
    public void findCartByCustomerIdAndProductIdTest(){
        String customerId = "2";
        String productId = "2";
        CartItem cart = cartItemRepository.findByCustomerIdAndProductId(customerId, productId);
        System.out.println(cart);

        assertThat(cart).isNotNull();

    }

    @Test
    public void updateCartItemForCustomerAndProductWithQuantity(){
        String customerId = "2";
        String productId = "2";
        Integer quantity = 8;
        cartItemRepository.updateQuantity(customerId, productId, quantity);

        CartItem updatedCart = cartItemRepository.findByCustomerIdAndProductId(customerId,productId);

        assertThat(updatedCart.getQuantity()).isEqualTo(quantity);

    }
}
