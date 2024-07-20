package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.CategoryMapper;
import com.a2z.product_service.model.dto.*;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("api/admin/categories")
//@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public ResponseEntity<Boolean> addCategory(@RequestBody CategoryDto categoryDto){
        Category category = CategoryMapper.categoryDtoMapToCategory(categoryDto, new Category());
//        System.out.println(category.getImage());
        boolean isCreated = categoryService.createCategory(category);
//        System.out.println(isCreated);

        if(isCreated)return ResponseEntity.status(HttpStatus.OK).build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PutMapping("/update")
    public ResponseEntity<Boolean> updateCategory(@RequestBody CategoryResponseWithIdDto categoryResponse){
        if(categoryResponse.getCategoryId() == null || categoryResponse.getCategoryId()<=0){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Category category = CategoryMapper.categoryResponseWithIdDtoMapToCategory(categoryResponse, new Category());
        boolean isUpdated = categoryService.updateCategory(category);
        if(isUpdated) return ResponseEntity.status(HttpStatus.OK).build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }
    @GetMapping("/control-panel")
    public ResponseEntity<CategoryResponseForControl> getEnabledAndDisabledCategories(){
        CategoryResponseForControl categoryResponseForControl = categoryService.getEnabledAndDisabledCategory();

        return ResponseEntity.status(HttpStatus.OK).body(categoryResponseForControl);
    }

    @GetMapping("")
    public ResponseEntity<List<CategoryResponseDto>> getCategoryByPage(@RequestParam(defaultValue = "1") Integer page){
        List<CategoryResponseDto> categoryResponseDtoList = categoryService.getCategoryByPage(page);

        return ResponseEntity.status(HttpStatus.OK).body(categoryResponseDtoList);
    }

    @GetMapping("/all-names")
    public ResponseEntity<List<CategoryNameDto>> getAllCategoryNames(){
        List<CategoryNameDto> categoryNameDtoList = categoryService.getAllCategoryNames();

        return ResponseEntity.status(HttpStatus.OK).body(categoryNameDtoList);
    }

    @PutMapping("/{categoryId}/toggle-status")
    public ResponseEntity<?> toggleCategoryEnabledStatus(@PathVariable Integer categoryId){
      boolean isToggled = categoryService.toggleCategoryEnabledStatus(categoryId);

      if(isToggled){
          return ResponseEntity.status(HttpStatus.OK).build();
      }

      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<?> deleteCategoryByCategoryId(@PathVariable Integer categoryId){
        boolean isDeleted = categoryService.deleteCategoryByCategoryId(categoryId);

        if(isDeleted){
            return ResponseEntity.status(HttpStatus.OK).build();
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }


}
