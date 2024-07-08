package com.a2z.product_service.service.impl;

import com.a2z.product_service.model.dto.CategoryResponseForControl;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.service.CategoryService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);

    }

    @Override
    public CategoryResponseForControl getEnabledAndDisabledCategory() {
        Integer enabledCategory = categoryRepository.countEnabledCategory();
        Integer disabledCategory = categoryRepository.countDisabledCategory();
        return new CategoryResponseForControl(enabledCategory, disabledCategory);
    }
}
