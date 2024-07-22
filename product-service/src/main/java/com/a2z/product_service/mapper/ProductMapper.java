package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.*;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.model.entity.ProductImage;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class ProductMapper {
    private final CategoryRepository categoryRepository;
    private final BrandsRepository brandsRepository;
    private final ProductRepository productRepository;

    @Autowired
    public ProductMapper(CategoryRepository categoryRepository, BrandsRepository brandsRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.brandsRepository = brandsRepository;
        this.productRepository = productRepository;
    }


    public ProductDto_v1 productMapTpProductDto(Product product, ProductDto_v1 productDto) {
        return productDto;
    }

    public Product productDtoMapToProduct(ProductDto_v1 productDto, Product product) {
        product.setName(productDto.getName());
        product.setAlias(productDto.getAlias());
        product.setShortDescription(productDto.getShortDescription());
        product.setFullDescription(productDto.getFullDescription());
        product.setCost(productDto.getCost());
        product.setEnabled(productDto.getEnabled());
        product.setInStock(productDto.isInStock());
        product.setPrice(productDto.getPrice());
        product.setDiscountPercent(product.getDiscountPercent());
        product.setHeight(productDto.getHeight());
        product.setWidth(productDto.getWidth());
        product.setLength(productDto.getLength());
        product.setWeight(productDto.getWeight());

        String categoryName = productDto.getCategoryName();
        Category existingCategory = categoryRepository.findByCategoryName(categoryName);

        String brandName = productDto.getBrandName();
        Brand existingBrand = brandsRepository.findByName(brandName);

        product.setCategory(existingCategory);
        product.setBrand(existingBrand);


//        product.setCategory(productDto.getCategory());
//        product.setBrand(productDto.getBrand());
        return product;
    }

    public static ProductDtoForOrder productMapToProductDtoForOrder(Product product, ProductDtoForOrder productDtoForOrder) {
        productDtoForOrder.setName(product.getName());
        productDtoForOrder.setCost(product.getCost());
        productDtoForOrder.setPrice(product.getPrice());
        productDtoForOrder.setDiscountPercent(product.getDiscountPercent());

        return productDtoForOrder;
    }

    public static ProductResponseForProductAdminPage productMapToProductResponseForProductAdmin(Product product, ProductResponseForProductAdminPage productResponse) {
        productResponse.setProductId(product.getId());
        productResponse.setProductName(product.getName());
        if (product.getBrand() != null && product.getBrand().getName() != null) {
            productResponse.setBrandName(product.getBrand().getName());
        } else {
            productResponse.setBrandName("Not Assigned"); // or any default value you prefer
        }
        if (product.getCategory() != null && product.getCategory().getCategoryName() != null) {
            productResponse.setCategoryName(product.getCategory().getCategoryName());
        } else {
            productResponse.setCategoryName("Not Assigned"); // or any default value you prefer
        }
        productResponse.setEnabled(product.isEnabled());
        productResponse.setImage(product.getMainImage());

        return productResponse;
    }

    public Product productOverViewDtoMapToProduct(ProductOverViewDto productOverViewDto, Product product) {
        product.setName(productOverViewDto.getName());
        if (productOverViewDto.getAlias() != null && productOverViewDto.getAlias().equals("")) {
            product.setAlias(productOverViewDto.getAlias());
        } else {
            String[] parts = product.getName().split("\\s+");
            String alias = String.join("-", parts);

            product.setAlias(alias);
        }
        if (productOverViewDto.getCategoryName() != null) {
            Category category = categoryRepository.findByCategoryName(productOverViewDto.getCategoryName());
            System.out.println("Category" + category.getCategoryName());
            product.setCategory(category);
        }
        if (productOverViewDto.getBrandName() != null) {
            Brand brand = brandsRepository.findByName(productOverViewDto.getBrandName());
            product.setBrand(brand);
        }
        if (productOverViewDto.getCost() != null) {
            product.setCost(productOverViewDto.getCost());
        }
//         else {
//            // Optionally handle the case where cost is null
//            // For example, you might set a default cost or leave it unchanged
//            product.setCost(0.0f); // Example default value
//        }
        if (productOverViewDto.getPrice() != null) {
            product.setPrice(productOverViewDto.getPrice());
        }
        if (productOverViewDto.getDiscountPercent() != null) {
            product.setDiscountPercent(productOverViewDto.getDiscountPercent());
        }
        product.setEnabled(productOverViewDto.isEnabled());
        product.setInStock(productOverViewDto.isInStock());

        return product;
    }

    public ProductOverViewDto productMapToProductOverViewDto(Product product, ProductOverViewDto productOverViewDto) {
        productOverViewDto.setName(product.getName());
        productOverViewDto.setAlias(product.getAlias());
        productOverViewDto.setCategoryName(product.getCategory().getCategoryName());
        productOverViewDto.setBrandName(product.getBrand().getName());
        productOverViewDto.setCost(product.getCost());
        productOverViewDto.setPrice(product.getPrice());
        productOverViewDto.setDiscountPercent(product.getDiscountPercent());
        productOverViewDto.setEnabled(product.isEnabled());
        productOverViewDto.setInStock(product.getInStock());
        return productOverViewDto;
    }

    public ProductDescriptionDto productMapToProductDescriptionDto(Product product, ProductDescriptionDto productDescriptionDto) {
        productDescriptionDto.setFullDescription(product.getFullDescription());
        productDescriptionDto.setShortDescription(product.getShortDescription());

        return productDescriptionDto;
    }

    public Product productDescriptionDtoMapToProduct(ProductDescriptionDto productDescriptionDto, Product product) {
        if (productDescriptionDto.getFullDescription() != null && !productDescriptionDto.getFullDescription().isEmpty()) {
            product.setFullDescription(productDescriptionDto.getFullDescription());
        }
        if (productDescriptionDto.getShortDescription() != null && !productDescriptionDto.getShortDescription().isEmpty()) {
            product.setShortDescription(productDescriptionDto.getShortDescription());
        }

        return product;
    }

    public ProductImageDto productImageDtoMapToProductImage(ProductImage productImage, ProductImageDto productImageDto) {
        productImageDto.setName(productImage.getName());
        productImageDto.setProductId(productImage.getProduct().getId());
        return productImageDto;
    }

    public ProductListImageDto productMapToProductListImageDto(Product product, ProductListImageDto productListImageDto) {
        productListImageDto.setMainImage(product.getMainImage());
        List<ProductImage> productListImages = product.getImages();
//        productListImageDto.setProductImages(productListImages);
        List<ProductImageDto> productImageDtoList = productListImageDto.getProductImages();
        for (ProductImage p : productListImages) {
            ProductImageDto productImageDto1 = productImageDtoMapToProductImage(p, new ProductImageDto());
            productImageDtoList.add(productImageDto1);
        }
        return productListImageDto;

    }

//    public ProductImage productImageDtoMapToProductImage(ProductImageDto productImageDto, ProductImage productImage){
//
//    }


//    public Product productListImageDtoMapToProduct(ProductListImageDto productListImageDto, Product product) {
//        product.setMainImage(productListImageDto.getMainImage());
//        List<ProductImage> productListImages = product.getImages();
//        List<ProductImageDto> productImageDtoList = productListImageDto.getProductImages();
//        for(ProductImageDto p : productImageDtoList){
//            ProductImage productImage =
//            productListImages.add(productImage);
//        }
//
//    }

    public Product productListImageDtoMapToProduct(ProductListImageDto productListImageDto, Product product) {
        if (productListImageDto == null || product == null) {
            return null; // or throw an IllegalArgumentException
        }

        // Set the main image
        product.setMainImage(productListImageDto.getMainImage());

        // Get the list of current product images
        List<ProductImage> productListImages = product.getImages();
        if (productListImages == null) {
            productListImages = new ArrayList<>();
            product.setImages(productListImages);
        } else {
            productListImages.clear(); // Clear existing images if necessary
        }

        // Get the list of product image DTOs from the input DTO
        List<ProductImageDto> productImageDtoList = productListImageDto.getProductImages();
        for (ProductImageDto productImageDto : productImageDtoList) {
            // Create a new ProductImage object
            ProductImage productImage = new ProductImage();
            productImage.setName(productImageDto.getName());

            // Assuming you have a method to fetch Product by id
            Product associatedProduct = fetchProductById(productImageDto.getProductId());
            if (associatedProduct != null) {
                productImage.setProduct(associatedProduct);
            }

            // Add the new product image to the list
            productListImages.add(productImage);
        }

        return product;
    }

    // This is a placeholder method to fetch the Product entity by its id
    private Product fetchProductById(Integer productId) {
        // Implement the logic to fetch the product entity from the database
        // For example, using a repository:
        // return productRepository.findBy
        Optional<Product> product = productRepository.findById(productId);
        return product.get(); // Return null if the product is not found
    }
}
