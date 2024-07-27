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
    private final int PRODUCTS_PER_PAGE_FOR_CUSTOMER_HOME_PAGE = 4;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    BrandsRepository brandsRepository;

    @Override
    public List<Product> getProductForCustomerHomePage(String categoryName) {
        Pageable pageable = PageRequest.of(0,PRODUCTS_PER_PAGE_FOR_CUSTOMER_HOME_PAGE);
        return productRepository.findDistinctProductsByCategoryName(categoryName, pageable);
    }
}
