package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.CategoryDto;
import com.a2z.product_service.model.dto.CategoryNameDto;
import com.a2z.product_service.model.dto.CategoryResponseDto;
import com.a2z.product_service.model.entity.Category;
import org.springframework.stereotype.Component;

@Component
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

    public static CategoryResponseDto categoryMapToCategoryResponseDto(Category category, CategoryResponseDto categoryResponseDto){
        categoryResponseDto.setCategoryId(category.getCategoryId());
        categoryResponseDto.setCategoryName(category.getCategoryName());
        categoryResponseDto.setDescription(category.getDescription());
        categoryResponseDto.setEnabled(category.isEnabled());
        return categoryResponseDto;
    }

    public static CategoryNameDto categoryMapToCategoryNameDto(Category category, CategoryNameDto categoryNameDto){
        categoryNameDto.setCategoryId(category.getCategoryId());
        categoryNameDto.setCategoryName(category.getCategoryName());

        return categoryNameDto;
    }
}
