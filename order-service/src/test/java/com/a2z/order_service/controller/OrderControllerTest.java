package com.a2z.order_service.controller;

import com.a2z.order_service.controller.admin.OrderController;

import com.a2z.order_service.exceptions.OrderNotFoundException;
import com.a2z.order_service.services.OrderService;
import lombok.Data;
import org.junit.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(true)
public class OrderControllerTest {


    // Successfully delete an existing order by valid ID
    @Test
    public void test_successfully_delete_existing_order_by_valid_id() throws OrderNotFoundException {
        OrderService orderService = mock(OrderService.class);
        OrderController orderController = new OrderController();
        orderController.orderService = orderService;

        int validOrderId = 2;
        when(orderService.deleteOrderById(validOrderId)).thenReturn(true);

        ResponseEntity<String> response = orderController.deleteOrder(String.valueOf(validOrderId));

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Order deleted successfully with id " + validOrderId, response.getBody());
    }

    // Handle invalid order ID format (non-numeric)
    @Test
    public void test_handle_invalid_order_id_format() throws OrderNotFoundException, NumberFormatException  {
        OrderService orderService = mock(OrderService.class);
        OrderController orderController = new OrderController();
        orderController.orderService = orderService;

        String invalidOrderId = "abc";

        ResponseEntity<String> response = orderController.deleteOrder(invalidOrderId);

        // Assert that the response has a 400 Bad Request status
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertTrue(response.getBody().contains("Failed to delete order"));
        assertTrue(response.getBody().contains("Invalid order ID format"));
    }


    // Handle non-existent order ID
    @Test
    public void test_handle_non_existent_order_id() throws OrderNotFoundException {
        OrderService orderService = mock(OrderService.class);
        OrderController orderController = new OrderController();
        orderController.orderService = orderService;

        int nonExistentOrderId = 999;
        when(orderService.deleteOrderById(nonExistentOrderId)).thenThrow(new OrderNotFoundException("Order not found"));

        ResponseEntity<String> response = orderController.deleteOrder(String.valueOf(nonExistentOrderId));

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Order not found", response.getBody());
    }


}
