package com.a2z.order_service.service.impl;

import com.a2z.order_service.exceptions.OrderNotFoundException;
import com.a2z.order_service.repository.OrderRepository;
import com.a2z.order_service.services.impl.OrderServiceImpl;

import org.junit.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(true)
public class OrderServiceImplTest {


    // Successfully delete an existing order by valid ID
    @Test
    public void test_delete_order_by_valid_id() throws OrderNotFoundException {
        OrderRepository orderRepository = mock(OrderRepository.class);
        OrderServiceImpl orderService = new OrderServiceImpl();
        orderService.orderRepository = orderRepository;

        int orderId = 2;
        when(orderRepository.countById(orderId)).thenReturn(1);

        boolean result = orderService.deleteOrderById(orderId);

        assertTrue(result);
        verify(orderRepository, times(1)).deleteById(orderId);
    }

    // Throw OrderNotFoundException when the order ID does not exist
    @Test
    public void test_throw_exception_when_order_id_not_exist() {
        OrderRepository orderRepository = mock(OrderRepository.class);
        OrderServiceImpl orderService = new OrderServiceImpl();
        orderService.orderRepository = orderRepository;

        int orderId = 1;
        when(orderRepository.countById(orderId)).thenReturn(0);

        assertThrows(OrderNotFoundException.class, () -> {
            orderService.deleteOrderById(orderId);
        });
    }


}
