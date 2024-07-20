package com.a2z.product_service.controller.admin;

import com.a2z.product_service.mapper.BrandMapper;
import com.a2z.product_service.model.dto.BrandDto;
import com.a2z.product_service.model.dto.BrandNamesDto;
import com.a2z.product_service.model.dto.BrandResponseDto;
import com.a2z.product_service.model.dto.BrandResponseForControl;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.service.BrandService;
import jakarta.ws.rs.QueryParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.OutputKeys;
import java.util.*;

@Controller
@RequestMapping("/api/admin/brands")
//@CrossOrigin("*")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @PostMapping("/add")
    public ResponseEntity<Boolean> addBrand(@RequestBody BrandDto brandDto){
//        System.out.println(brandDto);
        Brand brand = BrandMapper.brandDtoMapToBrand(brandDto, new Brand());
//        System.out.println(brand.getCategories().toString());
//        System.out.println(brand.toString());
       boolean isCreated =  brandService.addBrand(brand);
       if(isCreated)
        return ResponseEntity.status(HttpStatus.OK).build();

       return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/control-panel")
    public ResponseEntity<BrandResponseForControl> getBrandCount(){
        BrandResponseForControl brandCount = brandService.getTotalBrandCount();
        System.out.println(brandCount);
        return ResponseEntity.status(HttpStatus.OK).body(brandCount);
    }

    @GetMapping("")
    public ResponseEntity<List<BrandResponseDto>> getBrandsByPage(@RequestParam(defaultValue = "1") Integer page){
      List<BrandResponseDto> list = brandService.getBrandsByPage(page);

      return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @GetMapping("all-names")
    public ResponseEntity<List<BrandNamesDto>> getAllBrandNames(){
        List<BrandNamesDto> brandNamesDtoList = brandService.getAllBrandsNames();
        return ResponseEntity.status(HttpStatus.OK).body(brandNamesDtoList);
    }

    @DeleteMapping("/{brandId}")
    public ResponseEntity<?> deleteBrandByBrandId(@PathVariable Integer brandId){
        boolean isDeleted = brandService.deleteBrandById(brandId);
        if(isDeleted) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
