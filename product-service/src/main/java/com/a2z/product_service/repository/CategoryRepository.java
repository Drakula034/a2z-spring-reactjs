package com.a2z.product_service.repository;

import com.a2z.product_service.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer>  {
    Category findByCategoryName(String categoryName);
}

