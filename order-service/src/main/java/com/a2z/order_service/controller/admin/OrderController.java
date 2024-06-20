package com.a2z.order_service.controller.admin;

import com.a2z.order_service.enums.OrderStatus;
import com.a2z.order_service.exceptions.OrderNotFoundException;
import com.a2z.order_service.model.entity.Order;
import com.a2z.order_service.model.entity.OrderOnly;
import com.a2z.order_service.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/admin/orders")
public class OrderController {

    @Autowired
    public
    OrderService orderService;

    @GetMapping("/page/{pageNum}")
    public ResponseEntity<Page<Order>> getOrderList(@PathVariable("pageNum") int page) {
        try {
            Page<Order> ordersPage = orderService.getOrderByPage(page);

            if (ordersPage.isEmpty()) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(ordersPage);
            }
        } catch (IllegalArgumentException e) {
            // Handle invalid page number or other exceptions if necessary
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            // Handle any other unexpected exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("details/{id}")
    public ResponseEntity<Order> getOrderDetails(@PathVariable("id") int id) {
        try {
            Order order = orderService.getOrderById(id);
            return ResponseEntity.status(HttpStatus.OK).body(order);

        } catch (IllegalArgumentException e) {
            // Handle invalid page number or other exceptions if necessary
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            // Handle any other unexpected exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("details/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable String id) throws OrderNotFoundException,NumberFormatException {

        try {
            int orderId = Integer.parseInt(id);

            boolean isDeleteionSuccessful = orderService.deleteOrderById(orderId);
            String message = isDeleteionSuccessful ? "Order deleted successfully with id " + orderId : "Unable to delete order with id " + orderId;

            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (NumberFormatException ex) {
            // Handle invalid ID format (non-numeric)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to delete order: Invalid order ID format");
        } catch (OrderNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());

        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete order: " + ex.getMessage());
        }


    }


}
