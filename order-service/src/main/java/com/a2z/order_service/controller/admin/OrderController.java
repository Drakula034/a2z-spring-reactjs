package com.a2z.order_service.controller.admin;

import com.a2z.order_service.enums.OrderStatus;
import com.a2z.order_service.model.entity.Order;
import com.a2z.order_service.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/admin/orders")
public class OrderController {

    @Autowired
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



}
