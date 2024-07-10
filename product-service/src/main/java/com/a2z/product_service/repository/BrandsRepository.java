package com.a2z.product_service.repository;

import com.a2z.product_service.model.dto.BrandResponseForControl;
import com.a2z.product_service.model.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandsRepository extends JpaRepository<Brand, Integer> {
    Brand findByName(String brandName);

    @Query("select count(b) from Brand b")
    Integer countBrand();

}
