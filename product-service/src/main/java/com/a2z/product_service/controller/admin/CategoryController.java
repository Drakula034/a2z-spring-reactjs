package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.CategoryMapper;
import com.a2z.product_service.model.dto.CategoryDto;
import com.a2z.product_service.model.dto.CategoryResponseForControl;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/admin/categories")
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


}
