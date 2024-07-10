package com.a2z.product_service.service.impl;

import com.a2z.product_service.mapper.CategoryMapper;
import com.a2z.product_service.model.dto.CategoryResponseDto;
import com.a2z.product_service.model.dto.CategoryResponseForControl;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.*;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private int CATEGORY_PER_PAGE = 4;

    @Autowired
    private CategoryRepository categoryRepository;
    private CategoryMapper categoryMapper;
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

    @Override
    public List<CategoryResponseDto> getCategoryByPage(Integer page) {

        Pageable pageable = PageRequest.of(page-1, CATEGORY_PER_PAGE);
        List<Category> categories = categoryRepository.findAll(pageable).getContent();
        List<CategoryResponseDto> categoryResponseDtoList = new ArrayList<>();
        for(Category category : categories){
            categoryResponseDtoList.add(CategoryMapper.categoryMapToCategoryResponseDto(category, new CategoryResponseDto()));
        }
        return categoryResponseDtoList;
    }
}
