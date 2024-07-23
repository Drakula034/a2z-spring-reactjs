package com.a2z.product_service.service.impl;

import com.a2z.product_service.mapper.ProductMapper;
import com.a2z.product_service.model.dto.ProductOverViewDto;
import com.a2z.product_service.model.dto.ProductResponseForControl;
import com.a2z.product_service.model.dto.ProductResponseForProductAdminPage;
import com.a2z.product_service.model.entity.*;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import com.a2z.product_service.service.ProductService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

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

        if (product.getId() == null) {
            product.setCreatedTime(new Date());
        }

        if (product.getAlias() == null || product.getAlias().isEmpty()) {
            String defaultAlias = product.getName().replaceAll(" ", "_");
            product.setAlias(defaultAlias);
        } else {
            product.setAlias(product.getAlias().replaceAll(" ", "_"));
        }

        Product savedProduct = productRepository.save(newProduct);
        return savedProduct.getId();
    }

    @Override
    public Integer addProductOverView(Product product) {
        Product savedProduct = productRepository.save(product);
        if (savedProduct.getId() == null) return -1;
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
        Pageable pageable = PageRequest.of(page - 1, PRODUCTS_PER_PAGE);
        List<Product> products = productRepository.findAll(pageable).getContent();
        List<ProductResponseForProductAdminPage> responseProductList = new ArrayList<>();
        for (Product product : products) {
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
//        return Objects.equals(existingProduct.getShortDescription(), savedProduct.getShortDescription());
        return true;
    }

    @Override
    public Product getProductDescription(Integer productId) {
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return existingProduct;
    }

    @Override
    public Product getProductImages(Integer productId) {
        Product existingProduct = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        return existingProduct;
    }



    @Override
    @Transactional
    public Boolean updateProductImages(Product product) {
        try {
            // Fetch the existing product from the repository
            Product existingProduct = productRepository.findById(product.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found"));

            // Create a map of existing images by name
            Map<String, ProductImage> existingImagesMap = existingProduct.getImages().stream()
                    .collect(Collectors.toMap(ProductImage::getName, Function.identity(), (existing, replacement) -> existing));

            // Debug: Print existing images
            System.out.println("Existing Images: " + existingProduct.getImages().toString());

            // Set the main image
            existingProduct.setMainImage(product.getMainImage());


            System.out.println("Images after removal: " + existingProduct.getImages());

            // Iterate over new images
            for (ProductImage newImage : product.getImages()) {
                String imageName = newImage.getName();
                if (existingImagesMap.containsKey(imageName)) {
                    // Update existing image
                    ProductImage existingImage = existingImagesMap.get(imageName);
                    updateProductImages(existingImage, newImage);
                } else {
                    // Add new image
                    newImage.setProduct(existingProduct);  // Set the existing product
                    existingProduct.getImages().add(newImage);
                }
            }

//            // Remove images from existing product that are no longer present
//            existingProduct.getImages().removeIf(image -> !product.getImages().stream()
//                    .anyMatch(newImage -> newImage.getName().equals(image.getName())));

            // Remove images from existing product that are no longer present
            List<ProductImage> imagesToRemove = existingProduct.getImages().stream()
                    .filter(image -> !product.getImages().stream()
                            .anyMatch(newImage -> newImage.getName().equals(image.getName())))
                    .toList();

            existingProduct.getImages().removeAll(imagesToRemove);
            // Debugging output
            System.out.println("Images to Remove: " + imagesToRemove.toString());
            System.out.println("Images after removal: " + existingProduct.getImages().toString());

            // Save the updated product
            Product savedProduct = productRepository.save(existingProduct);

            // Debug: Print saved product
            System.out.println("Saved Product: " + savedProduct.getImages().toString());

            return savedProduct.getId() > 0; // Indicate success
        } catch (Exception e) {
            // Handle exceptions and rollback the transaction if necessary
            e.printStackTrace();
            return false; // Indicate failure
        }
    }

    private void updateProductImages(ProductImage existingImage, ProductImage newImage) {
        // Update fields of existing image with new values
        if (newImage.getName() != null) existingImage.setName(newImage.getName());
        // You don't need to update productId here as it's set through the product association
    }




    @Override
    public Product getProductShippingDetails(Integer productId) {
        Product existingProduct = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        return existingProduct;
    }

    @Override
    public boolean updateProductShippingDetails(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).orElseThrow(() -> new RuntimeException("Invalid Product Id"));

        existingProduct.setLength(product.getLength());
        existingProduct.setWidth(product.getWidth());
        existingProduct.setHeight(product.getHeight());
        existingProduct.setWeight(product.getWeight());

        Product savedProduct = productRepository.save(existingProduct);

        return savedProduct.getId() > 0;
    }

    @Override
    public Product getProductProductDetails(Integer productId) {
        Product existingProduct = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        return existingProduct;
    }

    @Override
    public boolean updateProductProductDetails(Product product) {
        // Retrieve the existing product
        Product existingProduct = productRepository.findById(product.getId())
                .orElseThrow(() -> new RuntimeException("Invalid Product Id"));

        // Get existing product details and their names
        Map<String, ProductDetails> existingDetailsMap = existingProduct.getProductDetails().stream()
                .collect(Collectors.toMap(ProductDetails::getName, Function.identity()));

        // Iterate over new product details
        for (ProductDetails newDetail : product.getProductDetails()) {
            String detailName = newDetail.getName();

            if (existingDetailsMap.containsKey(detailName)) {
                // Update existing detail
                ProductDetails existingDetail = existingDetailsMap.get(detailName);
                updateProductDetails(existingDetail, newDetail);
            } else {
                // Add new detail
                newDetail.setProduct(existingProduct);
                existingProduct.getProductDetails().add(newDetail);
            }
        }

        // Remove details from existing product that are no longer present
        existingProduct.getProductDetails().removeIf(detail -> !product.getProductDetails().stream()
                .anyMatch(newDetail -> newDetail.getName().equals(detail.getName())));

        // Save the updated product
        Product savedProduct = productRepository.save(existingProduct);

        return savedProduct.getId() > 0;
    }

    private void updateProductDetails(ProductDetails existingDetail, ProductDetails newDetail) {
        // Use reflection to update all fields
        Field[] fields = ProductDetails.class.getDeclaredFields();
        for (Field field : fields) {
            field.setAccessible(true); // Allow access to private fields
            try {
                Object newValue = field.get(newDetail);
                if (newValue != null) {
                    field.set(existingDetail, newValue);
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException("Failed to update product details", e);
            }
        }
    }


}
