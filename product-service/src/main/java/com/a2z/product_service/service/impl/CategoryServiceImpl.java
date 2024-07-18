package com.a2z.product_service.service.impl;

import com.a2z.product_service.mapper.CategoryMapper;
import com.a2z.product_service.model.dto.CategoryNameDto;
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

    @Override
    public List<CategoryNameDto> getAllCategoryNames() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryNameDto> categoryNameDtoList = new ArrayList<>();
        for(Category category: categories){
            categoryNameDtoList.add(CategoryMapper.categoryMapToCategoryNameDto(category, new CategoryNameDto()));
        }
        return categoryNameDtoList;
    }

    @Override
    public boolean toggleCategoryEnabledStatus(Integer categoryId) {
        Category category = categoryRepository.findById(categoryId).get();
        String currentStatus = category.getEnabled().trim();
        String categoryEnabledStatusChange = currentStatus.equals("true") ? "false" : "true";
        category.setEnabled(categoryEnabledStatusChange);
        Category savedCategory = categoryRepository.save(category);

        return savedCategory.getCategoryId() > 0;
    }

    @Override
    public boolean deleteCategoryByCategoryId(Integer categoryId) {
        // Check if the category exists
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);

        if (categoryOptional.isPresent()) {
            // Delete the category
            categoryRepository.deleteById(categoryId);

            // Check if the category has been deleted
            return categoryRepository.findById(categoryId).isEmpty();
        } else {
            // Handle the case where the category does not exist
            throw new NoSuchElementException("Category with ID " + categoryId + " not found.");
        }
    }

}
