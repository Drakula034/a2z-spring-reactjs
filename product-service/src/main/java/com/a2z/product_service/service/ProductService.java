package com.a2z.product_service.service;

import com.a2z.product_service.model.dto.ProductResponseForControl;
import com.a2z.product_service.model.entity.Product;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {

    Integer addProduct(Product product);
    Product getProductById(Integer productId);
    ProductResponseForControl getProductEnabledDisabledCount();
}
