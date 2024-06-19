package com.a2z.order_service.services;

import com.a2z.order_service.model.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {

    Page<Order> getOrderByPage(int page);
}
