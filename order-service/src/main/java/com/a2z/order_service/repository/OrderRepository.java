package com.a2z.order_service.repository;

import com.a2z.order_service.model.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

    @Query("SELECT o.id as id, " +
            "o.firstName as firstName, " +
            "o.lastName as lastName, " +
            "o.phoneNumber as phoneNumber, " +
            "o.addressLine1 as addressLine1, " +
            "o.addressLine2 as addressLine2, " +
            "o.city as city, " +
            "o.state as state, " +
            "o.postalCode as postalCode, " +
            "o.country as country, " +
            "o.orderTime as orderTime, " +
            "o.shippingCost as shippingCost, " +
            "o.productCost as productCost, " +
            "o.subtotal as subtotal, " +
            "o.tax as tax, " +
            "o.total as total, " +
            "o.delivaryDays as delivaryDays, " +
            "o.delivaryDate as delivaryDate, " +
            "o.paymentMethod as paymentMethod, " +
            "o.orderStatus as orderStatus, " +
            "o.customerId as customerId " +
            "FROM Order o")
    Page<Order> findAllOrdersWithoutOrderDetails(Pageable pageable);


//    @Query("SELECT o.id, o.firstName, o.lastName, o.phoneNumber, o.addressLine1, o.addressLine2, o.city, o.state, o.postalCode, o.country, o.orderTime, o.shippingCost, o.productCost, o.subtotal, o.tax, o.total, o.delivaryDays, o.delivaryDate, o.paymentMethod, o.orderStatus, o.customerId FROM Order o")
//    Page<Order> findAllOrdersWithoutOrderDetails(Pageable pageable);

    @Override
    Page<Order> findAll(Pageable pageable);
    Integer countById(int id);
}
