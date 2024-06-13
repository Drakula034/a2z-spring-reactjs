package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.BrandMapper;
import com.a2z.product_service.model.dto.BrandDto;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/admin/brands")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @PostMapping("/add")
    public ResponseEntity<String> addBrand(@RequestBody BrandDto brandDto){
        System.out.println(brandDto);
        Brand brand = BrandMapper.brandDtoMapToBrand(brandDto, new Brand());
        System.out.println(brand);
        brandService.addBrand(brand);
        return ResponseEntity.ok("Brand added successfully");


    }
}
