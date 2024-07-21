package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.ProductDto_v1;
import com.a2z.product_service.model.dto.ProductDtoForOrder;
import com.a2z.product_service.model.dto.ProductOverViewDto;
import com.a2z.product_service.model.dto.ProductResponseForProductAdminPage;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
    private final CategoryRepository categoryRepository;
    private final BrandsRepository brandsRepository;

    @Autowired
    public ProductMapper(CategoryRepository categoryRepository, BrandsRepository brandsRepository) {
        this.categoryRepository = categoryRepository;
        this.brandsRepository = brandsRepository;
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

    public  Product productOverViewDtoMapToProduct(ProductOverViewDto productOverViewDto, Product product) {
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
}
