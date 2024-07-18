package com.a2z.product_service.service;

import com.a2z.product_service.model.dto.ProductResponseForControl;
import com.a2z.product_service.model.dto.ProductResponseForProductAdminPage;
import com.a2z.product_service.model.entity.Product;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface ProductService {

    Integer addProduct(Product product);
    Product getProductById(Integer productId);
    ProductResponseForControl getProductEnabledDisabledCount();

    List<ProductResponseForProductAdminPage> getProductByPage(Integer page);
    boolean toggleProductEnabledStatus(Integer productId);
}
