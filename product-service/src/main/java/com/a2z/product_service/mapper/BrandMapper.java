package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.BrandDto;
import com.a2z.product_service.model.dto.BrandNamesDto;
import com.a2z.product_service.model.dto.BrandResponseDto;
import com.a2z.product_service.model.dto.CategoryResponseDto;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

@Component
public class BrandMapper {
    public static Brand brandDtoMapToBrand(BrandDto brandDto, Brand brand){
        brand.setName(brandDto.getName());
        brand.setName(brandDto.getName());
        brand.setCategories(new HashSet<>(brandDto.getCategories()));

        return brand;

    }

    public static BrandResponseDto brandmapToBrandResponseDto(Brand brand, BrandResponseDto brandResponseDto){
        brandResponseDto.setBrandId(brand.getId());
        brandResponseDto.setBrandName(brand.getName());
        brandResponseDto.setBrandLogo(brand.getLogo());
        Set<Category> categories = brand.getCategories();
        Set<CategoryResponseDto> categoriesResponseDto = categories.stream()
                .map(category -> CategoryMapper.categoryMapToCategoryResponseDto(category, new CategoryResponseDto()))
                .collect(Collectors.toSet());

        brandResponseDto.setCategories(categoriesResponseDto);

        return brandResponseDto;
    }

    public static BrandNamesDto brandMapToBrandNamesDto(Brand brand, BrandNamesDto brandResponse){
        brandResponse.setBrandId(brand.getId());
        brandResponse.setBrandName(brand.getName());

        return brandResponse;
    }
}
