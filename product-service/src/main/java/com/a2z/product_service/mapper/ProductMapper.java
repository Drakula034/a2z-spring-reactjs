package com.a2z.product_service.mapper;

import com.a2z.product_service.model.dto.ProductDto;
import com.a2z.product_service.model.dto.ProductDtoForOrder;
import com.a2z.product_service.model.dto.ProductResponseForProductAdminPage;
import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import com.a2z.product_service.model.entity.Product;
import com.a2z.product_service.repository.BrandsRepository;
import com.a2z.product_service.repository.CategoryRepository;
import com.a2z.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
    @Autowired
    private  CategoryRepository categoryRepository;
    @Autowired
    private  BrandsRepository brandsRepository;

    public ProductDto productMapTpProductDto(Product product, ProductDto productDto){
        return productDto;
    }

    public  Product productDtoMapToProduct(ProductDto productDto, Product product){
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

    public static ProductDtoForOrder productMapToProductDtoForOrder(Product product, ProductDtoForOrder productDtoForOrder){
        productDtoForOrder.setName(product.getName());
        productDtoForOrder.setCost(product.getCost());
        productDtoForOrder.setPrice(product.getPrice());
        productDtoForOrder.setDiscountPercent(product.getDiscountPercent());

        return productDtoForOrder;
    }

    public static ProductResponseForProductAdminPage productMapToProductResponseForProductAdmin(Product product, ProductResponseForProductAdminPage productResponse){
        productResponse.setProductId(product.getId());
        productResponse.setProductName(product.getName());
        productResponse.setBrandName(String.valueOf(product.getBrand()));
        productResponse.setCategoryName(String.valueOf(product.getCategory()));
        productResponse.setEnabled(product.isEnabled());
        productResponse.setImage(product.getMainImage());

        return productResponse;
    }
}
