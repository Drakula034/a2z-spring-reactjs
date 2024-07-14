package com.a2z.product_service.service.impl;

import com.a2z.product_service.mapper.BrandMapper;
import com.a2z.product_service.model.dto.BrandNamesDto;
import com.a2z.product_service.model.dto.BrandResponseDto;
import com.a2z.product_service.model.dto.BrandResponseForControl;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.service.BrandService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class BrandServiceImpl implements BrandService {
    private Integer BRANDS_PER_PAGE = 5;
    private final BrandsRepository brandsRepository;

    private final CategoryRepository categoryRepository;

    @Override
    public Brand addBrand(Brand brand) {
            Brand addBrand = new Brand();
            addBrand.setName(brand.getName());
            addBrand.setLogo(brand.getLogo());

            // No need to create a new Brand object, use the one passed as a parameter
            Brand savedBrand = brandsRepository.save(addBrand);

            // Retrieve existing categories by name and add them to the brand
            Set<Category> categories = brand.getCategories();
            Set<Category> existingCategories = new HashSet<>();

            for (Category category : categories) {
                Category existingCategory = categoryRepository.findByCategoryName(category.getCategoryName());
                if (existingCategory != null) {
                    existingCategories.add(existingCategory);
                }
            }

            // Set the categories to the brand and save
            savedBrand.setCategories(existingCategories);
            savedBrand = brandsRepository.save(savedBrand);

            // Print the saved brand for debugging purposes
//            System.out.println(savedBrand);

            return savedBrand;


    }

    @Override
    public List<Brand> getAllBrand() {
        return null;
    }

    @Override
    public BrandResponseForControl getTotalBrandCount() {
        Integer count = brandsRepository.countBrand();
        BrandResponseForControl total = new BrandResponseForControl();
        total.setTotalBrandCount(count);
        return total;
    }

    @Override
    public List<BrandResponseDto> getBrandsByPage(int page) {
        Pageable pageable = PageRequest.of(page-1, BRANDS_PER_PAGE);
        List<Brand> brands = brandsRepository.findAll(pageable).getContent();
        List<BrandResponseDto> brandResponseDtoList = new ArrayList<>();
        for(Brand brand: brands){
            brandResponseDtoList.add(BrandMapper.brandmapToBrandResponseDto(brand, new BrandResponseDto()));
        }
        return brandResponseDtoList;
    }

    @Override
    public List<BrandNamesDto> getAllBrandsNames() {
        List<Brand> brands = brandsRepository.findAll();
        List<BrandNamesDto> brandNamesDtoList = new ArrayList<>();
        for(Brand brand: brands){
            brandNamesDtoList.add(BrandMapper.brandMapToBrandNamesDto(brand, new BrandNamesDto()));
        }
        return brandNamesDtoList;
    }
}
