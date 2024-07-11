package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.CategoryMapper;
import com.a2z.product_service.model.dto.CategoryDto;
import com.a2z.product_service.model.dto.CategoryNameDto;
import com.a2z.product_service.model.dto.CategoryResponseDto;
import com.a2z.product_service.model.dto.CategoryResponseForControl;
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
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public ResponseEntity<String> addCategory(@RequestBody CategoryDto categoryDto){
        Category category = CategoryMapper.categoryDtoMapToCategory(categoryDto, new Category());
        categoryService.createCategory(category);

        return new ResponseEntity<>("Category "+category+" added", HttpStatus.CREATED );
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


}
