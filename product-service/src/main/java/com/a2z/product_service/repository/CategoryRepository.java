package com.a2z.product_service.repository;

import com.a2z.product_service.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>  {
    Category findByCategoryName(String categoryName);

    @Query("select count(c) from Category c where c.enabled = 'true'")
    Integer countEnabledCategory();
    @Query("select count(c) from Category c where c.enabled = 'false'")
    Integer countDisabledCategory();
}

