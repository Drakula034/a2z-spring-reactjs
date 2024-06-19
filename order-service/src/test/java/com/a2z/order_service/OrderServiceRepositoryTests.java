package com.a2z.order_service;

import com.a2z.order_service.enums.OrderStatus;
import com.a2z.order_service.enums.PaymentMethod;
import com.a2z.order_service.model.entity.Order;
import com.a2z.order_service.model.entity.OrderDetail;
import com.a2z.order_service.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class OrderServiceRepositoryTests {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    TestEntityManager testEntityManager;

    @Test
    public void addNewOrderTestWithoutCustomer(){
        String productId = "1";
        Order newOrder = new Order();
        newOrder.setFirstName("Abhishek");
        newOrder.setLastName("Kumar");

        newOrder.setOrderTime(new Date());
        newOrder.setShippingCost(10);
        newOrder.setProductCost(20);
        newOrder.setTax(0);

        newOrder.setPaymentMethod(PaymentMethod.CREDIT_CARD);
        newOrder.setOrderStatus(OrderStatus.NEW);
        newOrder.setDelivaryDate(new Date());
        newOrder.setDelivaryDays(1);

        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setProductId(productId);
        orderDetail.setOrder(newOrder);
        orderDetail.setProductCost(20);
        orderDetail.setShippingCost(10);
        orderDetail.setQuantity(1);
        orderDetail.setSubtotal(30);
        orderDetail.setUnitPrice(20);

        newOrder.getOrderDetails().add(orderDetail);
        Order savedOrder = orderRepository.save(newOrder);

        assertThat(savedOrder.getId()).isGreaterThan(0);

    }

    @Test
    public void addNewOrderWithMultipleProductTest(){
        String productId1 = "1";
        String productId2 = "2";
        Order order = new Order();
        order.setFirstName("Abhishek");
        order.setLastName("Kumar");



        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setProductId(productId1);
        orderDetail.setOrder(order);
        orderDetail.setProductCost(20);
        orderDetail.setShippingCost(10);
        orderDetail.setQuantity(1);
        orderDetail.setSubtotal(30);
        orderDetail.setUnitPrice(20);

        OrderDetail orderDetail2 = new OrderDetail();
        orderDetail2.setProductId(productId2);
        orderDetail2.setOrder(order);
        orderDetail2.setProductCost(20);
        orderDetail2.setShippingCost(10);
        orderDetail2.setQuantity(2);
        orderDetail2.setSubtotal(30 * 2);
        orderDetail2.setUnitPrice(20);

        order.getOrderDetails().add(orderDetail);
        order.getOrderDetails().add(orderDetail2);

        order.setOrderTime(new Date());
        order.setShippingCost(40);
        order.setProductCost(orderDetail.getProductCost() + orderDetail2.getProductCost());
        order.setTax(0);
        order.setSubtotal(100);
        order.setTotal(120);

        order.setPaymentMethod(PaymentMethod.COD);
        order.setOrderStatus(OrderStatus.PROCESSING);
        order.setDelivaryDate(new Date());
        order.setDelivaryDays(3);

        Order savedOrder = orderRepository.save(order);
        assertThat(savedOrder.getId()).isGreaterThan(0);


    }

    @Test
    public void listAllOrdersTest(){
        Iterable<Order> orders = orderRepository.findAll();
        assertThat(orders).hasSizeGreaterThan(0);
    }

    @Test
    public void updateOrderTest(){
        Integer orderId = 2;
        Order order = orderRepository.findById(orderId).get();

        order.setSubtotal(120);
        order.setOrderStatus(OrderStatus.SHIPPING);
        order.setDelivaryDays(4);

        Order updatedOrder = orderRepository.save(order);
        assertThat(updatedOrder.getOrderStatus()).isEqualTo(OrderStatus.SHIPPING);
    }

    @Test
    public void getOrderTest(){
        Integer orderId = 2;
        Order order = orderRepository.findById(orderId).get();
        assertThat(order).isNotNull();
    }
}
