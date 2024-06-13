package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.CategoryDto;
import com.a2z.product_service.model.entity.Category;

public class CategoryMapper {

    public static CategoryDto categoryMapToCategoryDto(Category category,CategoryDto categoryDto){
        categoryDto.setCategoryName(category.getCategoryName());
        categoryDto.setDescription(category.getDescription());
        categoryDto.setEnabled(category.isEnabled());
        return categoryDto;
    }

    public static Category categoryDtoMapToCategory(CategoryDto categoryDto, Category category){
        category.setCategoryName(categoryDto.getCategoryName());
        category.setDescription(categoryDto.getDescription());
        category.setEnabled(categoryDto.isEnabled());
        return category;
    }
}
