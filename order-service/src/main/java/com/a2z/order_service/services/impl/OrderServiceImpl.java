package com.a2z.order_service.services.impl;

import com.a2z.order_service.exceptions.OrderNotFoundException;
import com.a2z.order_service.model.entity.Order;
import com.a2z.order_service.repository.OrderRepository;
import com.a2z.order_service.services.OrderService;
//import com.a2z.order_service.services.feignclient.ProductServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    private int ORDER_PER_PAGE = 10;

    @Autowired
    public
    OrderRepository orderRepository;


    @Override
    public Page<Order> getOrderByPage(int page) {
        Pageable pageable = PageRequest.of(page-1, ORDER_PER_PAGE);
//        Page<Order> orders = orderRepository.findAllOrdersWithoutOrderDetails(pageable);
        Page<Order> orders = orderRepository.findAll(pageable);
        return orders;
    }

    @Override
    public Order getOrderById(int id) {
        Order order = orderRepository.findById(id).get();

        return order;
    }

    @Override
    public boolean deleteOrderById(int id) throws OrderNotFoundException {
        Integer count = orderRepository.countById(id);
        if(count == null || count == 0){
            throw new OrderNotFoundException("Order not found with id " + id);
        }
        orderRepository.deleteById(id);
        return true;
    }


//    ProductServiceClient productServiceClient;


//    public Order createOrder(){}
}
