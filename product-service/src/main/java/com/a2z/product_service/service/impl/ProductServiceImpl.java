package com.a2z.product_service.service.impl;

import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import com.a2z.product_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.Date;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    BrandsRepository brandsRepository;
    @Override
    public Integer addProduct(Product product) {
        Product newProduct = Product.builder()
                .name(product.getName())
                .alias(product.getAlias())
                .shortDescription(product.getShortDescription())
                .fullDescription(product.getFullDescription())
                .price(product.getPrice())
                .cost(product.getCost())
                .discountPercent(product.getDiscountPercent())
                .inStock(product.getInStock())
                .enabled(product.isEnabled())
                .length(product.getLength())
                .width(product.getWidth())
                .height(product.getHeight())
                .weight(product.getWeight())
                .category(product.getCategory())
                .brand(product.getBrand())
                .build();

        if(product.getId() == null){
            product.setCreatedTime(new Date());
        }
////        fot Category
//        Category category = product.getCategory();
//        String categoryName = category.getCategory();
//        Category existingCategory = categoryRepository.findByCategoryName(categoryName);
//
//        newProduct.setCategory(existingCategory);
//
////        for brand
//        Brand brand = product.getBrand();
//        String brandName = brand.getName();
//        Brand existingBrand = brandsRepository.findByName(brandName);
//        newProduct.setBrand(existingBrand);



        if(product.getAlias() == null || product.getAlias().isEmpty()){
            String defaultAlias = product.getName().replaceAll(" ", "_");
            product.setAlias(defaultAlias);
        }else{
            product.setAlias(product.getAlias().replaceAll(" ", "_"));
        }

        Product savedProduct = productRepository.save(newProduct);
        return savedProduct.getId();
    }
}
