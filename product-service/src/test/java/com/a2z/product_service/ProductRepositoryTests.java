package com.a2z.product_service;

import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.model.entity.ProductDetails;
import com.a2z.product_service.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(true)
public class ProductRepositoryTests {

    @Autowired
    ProductRepository productRepository;

    @Test
    public void addProductDetailsTest(){
        int productId = 1;
        Product product = productRepository.findById(productId).get();
        ProductDetails productDetails = new ProductDetails();

        product.addProductDetails("Memory", "16GB LPDDR4X on board");
        product.addProductDetails("Storage",
                "512GB M.2 NVMe™ PCIe® 3.0 SSD");
        product.addProductDetails("OS",
                "512GB M.2 NVMe™ PCIe® 3.0 SSD");

        Product savedProduct = productRepository.save(product);
        assertThat(savedProduct.getId()).isNotNull();
    }
}
