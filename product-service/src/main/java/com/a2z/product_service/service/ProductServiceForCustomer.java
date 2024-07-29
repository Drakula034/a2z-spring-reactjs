package com.a2z.product_service.service;

import com.a2z.product_service.model.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductServiceForCustomer {
    List<Product> getProductForCustomerHomePage(String categoryName, int limit);
    List<Product> getProductForCategoryPage(String categoryName, int limit);
    Product getProductById(Integer productId);
}
