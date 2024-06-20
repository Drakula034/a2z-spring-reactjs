package com.a2z.cart_service.controller.ui;

import com.a2z.cart_service.exceptions.CustomerNotFoundException;
import com.a2z.cart_service.exceptions.ProductNotFoundException;
import com.a2z.cart_service.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/ui/carts")
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping("/add/{productId}/{quantity}")
    public ResponseEntity<String> addProductToCart(@PathVariable(name = "productId") String productId,
                                                   @PathVariable(name = "quantity") Integer quantity) {
        String message = "";
        try {
            // Validate quantity
            if (quantity <= 0) {
                throw new IllegalArgumentException("Quantity must be greater than zero");
            }
            String customerId = "3";
            customerId = getCustomerAuthentication(customerId) ? "3" : "";
            Integer updatedQuantity = cartService.addProduct(productId, customerId, quantity);
            message = updatedQuantity + "items of this product were added to cart";

        } catch (CustomerNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add product to cart: " + ex.getMessage());
        }


        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    //    later it should be rewritten when frontend and security applied
    private boolean getCustomerAuthentication(String customerId) throws CustomerNotFoundException {

        return true;

    }


}
