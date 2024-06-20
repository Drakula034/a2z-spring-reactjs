package com.a2z.cart_service.controller.ui;

import com.a2z.cart_service.exceptions.CustomerNotFoundException;
import com.a2z.cart_service.exceptions.ProductNotFoundException;
import com.a2z.cart_service.services.CartService;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;
import com.a2z.cart_service.controller.ui.CartController;

import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Objects;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(true)
public class CartControllerTests {


    // Successfully adding a product to the cart with valid productId and quantity
    @Test
    public void test_add_product_to_cart_success() {
        CartService cartService = mock(CartService.class);
        CartController cartController = new CartController();
        ReflectionTestUtils.setField(cartController, "cartService", cartService);

        String productId = "2";
        Integer quantity = 2;
        String customerId = "1";
        Integer updatedQuantity = 2;

        when(cartService.addProduct(productId, customerId, quantity)).thenReturn(updatedQuantity);

        ResponseEntity<String> response = cartController.addProductToCart(productId, quantity);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals("2items of this product were added to cart", response.getBody());
    }

    // Adding a product with a non-existent productId
//    @Test
//    public void test_add_product_with_non_existent_product_id() {
//        CartService cartService = mock(CartService.class);
//        CartController cartController = new CartController();
//        ReflectionTestUtils.setField(cartController, "cartService", cartService);
//
//        String productId = "4";
//        Integer quantity = 1;
//        String customerId = "1";
//
//        when(cartService.addProduct(productId, customerId, quantity)).thenThrow(new ProductNotFoundException("Product not found"));
//
//        ResponseEntity<String> response = cartController.addProductToCart(productId, quantity);
//
//        assertEquals(HttpStatus.CREATED, response.getStatusCode());
//        assertEquals("You must login to add this product in cart", response.getBody());
//    }

    // Adding a product with a quantity of zero or negative value
    @Test
    public void test_add_product_with_invalid_quantity() {
        // Create mock CartService and CartController
        CartService cartService = mock(CartService.class);
        CartController cartController = new CartController();
        ReflectionTestUtils.setField(cartController, "cartService", cartService);

        // Define test parameters
        String productId = "2";
        Integer quantity = -1; // Invalid quantity
        String expectedErrorMessage = "Quantity must be greater than zero";

        // Call controller method under test
        ResponseEntity<String> response = cartController.addProductToCart(productId, quantity);

        // Assert the response status code
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());

        // Assert the response body contains the expected error message
        assertTrue(response.getBody().contains(expectedErrorMessage));
    }



}
