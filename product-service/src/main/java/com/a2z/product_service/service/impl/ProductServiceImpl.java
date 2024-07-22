package com.a2z.product_service.service.impl;

import com.a2z.product_service.mapper.ProductMapper;
import com.a2z.product_service.model.dto.ProductOverViewDto;
import com.a2z.product_service.model.dto.ProductResponseForControl;
import com.a2z.product_service.model.dto.ProductResponseForProductAdminPage;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import com.a2z.product_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {

    private final int PRODUCTS_PER_PAGE = 4;
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

        if(product.getAlias() == null || product.getAlias().isEmpty()){
            String defaultAlias = product.getName().replaceAll(" ", "_");
            product.setAlias(defaultAlias);
        }else{
            product.setAlias(product.getAlias().replaceAll(" ", "_"));
        }

        Product savedProduct = productRepository.save(newProduct);
        return savedProduct.getId();
    }

    @Override
    public Integer addProductOverView(Product product) {
        Product savedProduct = productRepository.save(product);
        if(savedProduct.getId() == null)return -1;
        return savedProduct.getId();
    }

    @Override
    public Product getProductById(Integer productId) {
        Optional<Product> product = productRepository.findById(productId);

        return product.get();
    }

    @Override
    public ProductResponseForControl getProductEnabledDisabledCount() {
        Integer enabledProductCount = productRepository.getEnabledProductCount();
        Integer disabledProductCount = productRepository.getDisabledProductCount();
        Integer inStockProductCount = productRepository.getInStockProductsCount();
        Integer outOfStockProductCount = productRepository.getOutOfStockProductsCount();
        return new ProductResponseForControl(enabledProductCount, disabledProductCount, inStockProductCount, outOfStockProductCount);
    }

    @Override
    public List<ProductResponseForProductAdminPage> getProductByPage(Integer page) {
        Pageable pageable = PageRequest.of(page-1, PRODUCTS_PER_PAGE);
        List<Product> products = productRepository.findAll(pageable).getContent();
        List<ProductResponseForProductAdminPage> responseProductList = new ArrayList<>();
        for(Product product : products) {
            responseProductList.add(ProductMapper.productMapToProductResponseForProductAdmin(product, new ProductResponseForProductAdminPage()));
        }
         return responseProductList;
    }

    @Override
    public boolean toggleProductEnabledStatus(Integer productId) {
        Product product = productRepository.findById(productId).get();
        product.setEnabled(!product.isEnabled());
        Product savedProduct = productRepository.save(product);
        return savedProduct.getId() > 0;
    }

    @Override
    public Product getProductOverView(Integer productId) {

        return productRepository.findById(productId).get();
    }

    @Override
    public Boolean updateProductOverView(Product updatedProduct) {
        // Step 1: Retrieve the existing product from the database
        Product existingProduct = productRepository.findById(updatedProduct.getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Step 2: Update only the fields that are not null in the provided product
        if (updatedProduct.getName() != null) {
            existingProduct.setName(updatedProduct.getName());
        }
        if (updatedProduct.getAlias() != null) {
            existingProduct.setAlias(updatedProduct.getAlias());
        }
        if (updatedProduct.getBrand() != null) {
            existingProduct.setBrand(updatedProduct.getBrand());
        }
        if (updatedProduct.getCategory() != null) {
            existingProduct.setCategory(updatedProduct.getCategory());
        }

            existingProduct.setEnabled(updatedProduct.isEnabled());


            existingProduct.setInStock(updatedProduct.getInStock());

        if (updatedProduct.getCost() != existingProduct.getCost()) {
            existingProduct.setCost(updatedProduct.getCost());
        }
        if (updatedProduct.getPrice() != existingProduct.getPrice()) {
            existingProduct.setPrice(updatedProduct.getPrice());
        }
        if (updatedProduct.getDiscountPercent() != existingProduct.getDiscountPercent()) {
            existingProduct.setDiscountPercent(updatedProduct.getDiscountPercent());
        }

        // Step 3: Save the updated product entity back to the database
        productRepository.save(existingProduct);
        return true;
    }

    @Override
    public Boolean updateProductDescription(Product updateProduct) {
        Product existingProduct = productRepository.findById(updateProduct.getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));
        existingProduct.setShortDescription(updateProduct.getShortDescription());
        existingProduct.setFullDescription(updateProduct.getFullDescription());
        Product savedProduct = productRepository.save(existingProduct);
        return Objects.equals(existingProduct.getShortDescription(), savedProduct.getShortDescription());
    }

    @Override
    public Product getProductDescription(Integer productId) {
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return existingProduct;
    }

}
