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

import javax.swing.text.html.Option;
import java.util.*;

@Service
@RequiredArgsConstructor
public class BrandServiceImpl implements BrandService {
    private Integer BRANDS_PER_PAGE = 5;
    private final BrandsRepository brandsRepository;

    private final CategoryRepository categoryRepository;

    private Set<Category> getExistingCategories(Set<Category> categories) {
        Set<Category> existingCategories = new HashSet<>();

        for (Category category : categories) {
            Category existingCategory = categoryRepository.findByCategoryName(category.getCategoryName());
            if (existingCategory != null) {
                existingCategories.add(existingCategory);
            }
        }

        return existingCategories;
    }


    @Override
    public boolean addBrand(Brand brand) {
        // Retrieve existing categories by name and add them to the brand
        Set<Category> categories = brand.getCategories();

        Set<Category>existingCategories = getExistingCategories(categories);
        brand.setCategories(existingCategories);

        // Save the brand with its categories
        Brand savedBrand = brandsRepository.save(brand);

        return savedBrand.getId() > 0;
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

    @Override
    public boolean deleteBrandById(Integer brandId) {
        Optional<Brand> brand = brandsRepository.findById(brandId);
        if(brand.isPresent()){
            brandsRepository.delete(brand.get());
            return brandsRepository.findById(brandId).isEmpty();
        }else {
            // Handle the case where the category does not exist
            throw new NoSuchElementException("Brand with ID " + brandId + " not found.");
        }
    }

    @Override
    public boolean updateBrand(Brand brand) {
        try {
            Optional<Brand> existingBrandOptional = brandsRepository.findById(brand.getId());
            if (existingBrandOptional.isPresent()) {
                Brand existingBrand = existingBrandOptional.get();
                existingBrand.setName(brand.getName());
                existingBrand.setLogo(brand.getLogo());

                Set<Category> categories = brand.getCategories();
                Set<Category> existingCategories = getExistingCategories(categories);

                // Set the categories to the existing brand
                existingBrand.setCategories(existingCategories);

                brandsRepository.save(existingBrand);
                return true;
            } else {
                // Handle the case where the brand does not exist
                throw new NoSuchElementException("Brand with ID " + brand.getId() + " not found.");
            }
        } catch (Exception ex) {
            throw new Error(ex.getMessage());
        }
    }

}
