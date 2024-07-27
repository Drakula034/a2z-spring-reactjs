package com.a2z.product_service.repository;

import com.a2z.product_service.model.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>  {


    @Query("select count(c) from Category c where c.enabled = 'true'")
    Integer countEnabledCategory();
    @Query("select count(c) from Category c where c.enabled = 'false'")
    Integer countDisabledCategory();

    Page<Category> findAll(Pageable pageable);
    Category findByCategoryName(String categoryName);



}

