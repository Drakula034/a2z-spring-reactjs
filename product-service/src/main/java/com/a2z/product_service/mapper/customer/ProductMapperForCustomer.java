package com.a2z.product_service.mapper.customer;

import com.a2z.product_service.model.dto.ProductResponseForCustomerHomePageDto;
import com.a2z.product_service.model.entity.Product;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProductMapperForCustomer {

    private ProductResponseForCustomerHomePageDto productMapToProductResponseForCustomerHomePagedto(Product product, ProductResponseForCustomerHomePageDto productResponseForCustomerHomePageDto){
        productResponseForCustomerHomePageDto.setId(product.getId());
        productResponseForCustomerHomePageDto.setName(product.getName());
        productResponseForCustomerHomePageDto.setProductMainImage(product.getMainImage());

        return productResponseForCustomerHomePageDto;
    }

    public List<ProductResponseForCustomerHomePageDto> productListMapToProductResponseListForCustomerHomePageDto(List<Product> productList) {
        List<ProductResponseForCustomerHomePageDto> products = new ArrayList<>();
        for (Product p : productList) {
            ProductResponseForCustomerHomePageDto productResponseForCustomerHomePageDto1 = productMapToProductResponseForCustomerHomePagedto(p, new ProductResponseForCustomerHomePageDto());
            products.add(productResponseForCustomerHomePageDto1);
        }

        return products;
    }
}
