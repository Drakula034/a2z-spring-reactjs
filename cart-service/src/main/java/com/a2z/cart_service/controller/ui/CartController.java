package com.a2z.cart_service.controller.ui;

import com.a2z.cart_service.exceptions.CustomerNotFoundException;
import com.a2z.cart_service.exceptions.ProductNotFoundException;
import com.a2z.cart_service.model.dto.CartItemDto;
import com.a2z.cart_service.services.CartService;
import com.a2z.cart_service.services.feignclient.CustomerServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/ui/carts")
public class CartController {

    @Autowired
    CustomerServiceClient customerServiceClient;
    @Autowired
    CartService cartService;

    @PostMapping("/add/{customerId}/{productId}/{quantity}")
    public ResponseEntity<String> addProductToCart(
            @PathVariable(name = "customerId") Integer customerId,
            @PathVariable(name = "productId") String productId,
            @PathVariable(name = "quantity") Integer quantity) {

//        System.out.println("API is working");

        try {
            // Validate quantity
            if (quantity <= 0) {
                throw new IllegalArgumentException("Quantity must be greater than zero");
            }

            // Validate customerId
            if (!getCustomerAuthentication(customerId)) {
                throw new CustomerNotFoundException("Customer not found");
            }

            Integer updatedQuantity = cartService.addProduct(productId, customerId.toString(), quantity);
            String message = updatedQuantity + " items of this product were added to the cart";
//            System.out.println(message);
            return ResponseEntity.status(HttpStatus.CREATED).body(message);

        } catch (CustomerNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add product to cart: " + ex.getMessage());
        }
    }

    @PutMapping("/remove/{customerId}/{productId}/{quantity}")
    public ResponseEntity<String> decreaseProductCountFromCart(@PathVariable(name = "customerId") Integer customerId,
                                                                @PathVariable(name = "productId") String productId,
                                                                @PathVariable(name = "quantity") Integer quantity) {

        try {
            // Validate quantity
            if (quantity <= 0) {
                throw new IllegalArgumentException("Quantity must be greater than zero");
            }

            // Validate customerId
            if (!getCustomerAuthentication(customerId)) {
                throw new CustomerNotFoundException("Customer not found");
            }

            Integer updatedQuantity = cartService.decreaseProductCount(productId, customerId.toString(), quantity);
            String message = updatedQuantity + " items of this product are available in the cart";
//            System.out.println(message);
            return ResponseEntity.status(HttpStatus.CREATED).body(message);

        } catch (CustomerNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to remove product to cart: " + ex.getMessage());
        }
    }

    @DeleteMapping("/delete/{customerId}/{productId}")
    public ResponseEntity<String> deleteProductFromCart(@PathVariable(name = "customerId") Integer customerId,
                                                        @PathVariable(name = "productId") String productId) {
        try {
            // Validate customerId
            if (!getCustomerAuthentication(customerId)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Customer not authenticated");
            }

            boolean deleted = cartService.deleteProductFromCart(productId, customerId.toString());
            if (deleted) {
                return ResponseEntity.status(HttpStatus.OK).body("Product deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found in cart");
            }
        } catch (CustomerNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the product from the cart");
        }
    }


    @RequestMapping("/get/{customerId}")
    public ResponseEntity<List<CartItemDto>> getCartItems(@PathVariable Integer customerId) throws CustomerNotFoundException {

        // Validate customerId
        if (!getCustomerAuthentication(customerId)) {
            throw new CustomerNotFoundException("Customer not found with customerId: " + customerId);
        }
        // Get cart items
        List<CartItemDto> cartItemDtoList = cartService.getCartItemsOfCustomer(customerId.toString());
        return ResponseEntity.status(HttpStatus.OK).body(cartItemDtoList);
    }

    //    later it should be rewritten when frontend and security applied
    private boolean getCustomerAuthentication(Integer customerId) throws CustomerNotFoundException {
        return Boolean.TRUE.equals(customerServiceClient.isCustomerExists(customerId).getBody());

    }


}
