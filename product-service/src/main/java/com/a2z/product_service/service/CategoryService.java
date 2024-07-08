package com.a2z.product_service.service;

import com.a2z.product_service.model.dto.CategoryResponseForControl;
import com.a2z.product_service.model.entity.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {

    Category createCategory(Category category);
    CategoryResponseForControl getEnabledAndDisabledCategory();
}
