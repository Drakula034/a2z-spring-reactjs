package com.a2z.order_service.services;

import com.a2z.order_service.exceptions.OrderNotFoundException;
import com.a2z.order_service.model.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {

    Page<Order> getOrderByPage(int page);
    Order getOrderById(int id);

    boolean deleteOrderById(int id) throws OrderNotFoundException;
}
