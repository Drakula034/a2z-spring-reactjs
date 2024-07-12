package com.a2z.product_service.repository;

import com.a2z.product_service.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("select count(p) from Product p where p.enabled = true ")
    Integer getEnabledProductCount();
    @Query("select count(p) from Product p where p.enabled = false ")
    Integer getDisabledProductCount();
}
