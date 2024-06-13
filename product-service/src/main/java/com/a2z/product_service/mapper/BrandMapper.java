package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.BrandDto;
import com.a2z.product_service.model.entity.Brand;

import java.util.*;

public class BrandMapper {


    public static Brand brandDtoMapToBrand(BrandDto brandDto, Brand brand){
        brand.setName(brandDto.getName());
        brand.setName(brandDto.getName());
        brand.setCategories(new HashSet<>(brandDto.getCategories()));

        return brand;

    }
}
