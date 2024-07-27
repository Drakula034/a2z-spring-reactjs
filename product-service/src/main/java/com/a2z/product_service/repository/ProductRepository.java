package com.a2z.product_service.repository;

import com.a2z.product_service.model.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("select count(p) from Product p where p.enabled = true ")
    Integer getEnabledProductCount();
    @Query("select count(p) from Product p where p.enabled = false ")
    Integer getDisabledProductCount();

    @Query("select count(p) from Product p where p.inStock = true ")
    Integer getInStockProductsCount();
    @Query("select count(p) from Product p where p.inStock = false ")
    Integer getOutOfStockProductsCount();

    Page<Product> findAll(Pageable pageable);

    @Query("SELECT p FROM Product p WHERE p.category.categoryName = :categoryName GROUP BY p.brand.id")
    List<Product> findDistinctProductsByCategoryName(@Param("categoryName") String categoryName, Pageable pageable);
}
