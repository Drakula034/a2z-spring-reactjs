package com.a2z.product_service.service;

import com.a2z.product_service.model.dto.BrandNamesDto;
import com.a2z.product_service.model.dto.BrandResponseDto;
import com.a2z.product_service.model.dto.BrandResponseForControl;
import com.a2z.product_service.model.entity.Brand;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface BrandService {

    Brand addBrand(Brand brand);
    List<Brand> getAllBrand();
    BrandResponseForControl getTotalBrandCount();

    List<BrandResponseDto> getBrandsByPage(int page);
    List<BrandNamesDto> getAllBrandsNames();
    boolean deleteBrandById(Integer brandId);
}
