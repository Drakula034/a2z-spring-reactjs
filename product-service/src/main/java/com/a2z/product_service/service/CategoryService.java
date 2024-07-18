package com.a2z.product_service.service;

import com.a2z.product_service.model.dto.CategoryNameDto;
import com.a2z.product_service.model.dto.CategoryResponseDto;
import com.a2z.product_service.model.dto.CategoryResponseForControl;
import com.a2z.product_service.model.entity.Category;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface CategoryService {

    Category createCategory(Category category);
    CategoryResponseForControl getEnabledAndDisabledCategory();
    List<CategoryResponseDto> getCategoryByPage(Integer page);
    List<CategoryNameDto> getAllCategoryNames();
    boolean toggleCategoryEnabledStatus(Integer categoryId);
    boolean deleteCategoryByCategoryId(Integer categoryId);
}
