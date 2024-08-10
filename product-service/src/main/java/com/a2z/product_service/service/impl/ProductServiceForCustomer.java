package com.a2z.product_service.service.impl;

import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceForCustomer implements com.a2z.product_service.service.ProductServiceForCustomer {


    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    BrandsRepository brandsRepository;

    @Override
    public List<Product> getProductForCustomerHomePage(String categoryName, int limit) {
        Pageable pageable = PageRequest.of(0,limit);
        return productRepository.findDistinctProductsByCategoryName(categoryName, pageable);
    }

    @Override
    public List<Product> getProductForCategoryPage(String categoryName, int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        return productRepository.getAllProductsByCategoryName(categoryName, pageable);
    }

    @Override
    public Product getProductById(Integer productId) {
        return productRepository.findById(productId).orElse(null);
//        return null;
    }

    @Override
    public Product getProductInfoForCart(Integer productId) {
        return productRepository.findById(productId).orElse(null);
    }
}
