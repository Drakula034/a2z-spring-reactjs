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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/ui/carts")
public class CartController {

    @Autowired
    CustomerServiceClient customerServiceClient;
    @Autowired
    CartService cartService;
//    @Autowired CustomerRepository customerRepository;

//    @PostMapping("/add/{productId}/{quantity}")
//    public ResponseEntity<String> addProductToCart(@PathVariable(name = "productId") String productId,
//                                                   @PathVariable(name = "quantity") Integer quantity) {
//        String message = "";
//        try {
//            // Validate quantity
//            if (quantity <= 0) {
//                throw new IllegalArgumentException("Quantity must be greater than zero");
//            }
//            String customerId = "3";
//            customerId = getCustomerAuthentication(customerId) ? "3" : "";
//            Integer updatedQuantity = cartService.addProduct(productId, customerId, quantity);
//            message = updatedQuantity + "items of this product were added to cart";
//
//        } catch (CustomerNotFoundException ex) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
//        } catch (IllegalArgumentException ex) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
//        } catch (Exception ex) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add product to cart: " + ex.getMessage());
//        }
//
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(message);
//    }

    @RequestMapping("/get/{customerId}")
    public ResponseEntity<List<CartItemDto>> getCartItems(@PathVariable Integer customerId) throws CustomerNotFoundException {

        // Validate customerId
        if(!getCustomerAuthentication(customerId)){
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
