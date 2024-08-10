package com.a2z.product_service.mapper.customer;

import com.a2z.product_service.mapper.ProductMapper;
import com.a2z.product_service.model.dto.ProductOverViewDto;
import com.a2z.product_service.model.dto.ProductResponseDtoForCustomer;
import com.a2z.product_service.model.dto.ProductResponseForCart;
import com.a2z.product_service.model.dto.ProductResponseForCustomerHomePageDto;
import com.a2z.product_service.model.entity.Product;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProductMapperForCustomer {
    private final ProductMapper productMapper;

    public ProductMapperForCustomer(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

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

    public ProductResponseDtoForCustomer productMapTpProductResponseDtoForCustomer(Product product,
                                                                                   ProductResponseDtoForCustomer productResponseDtoForCustomer){
        productResponseDtoForCustomer.setId(product.getId());
        ProductOverViewDto productOverViewDto = productResponseDtoForCustomer.getProductOverViewDto();

        productResponseDtoForCustomer.setProductOverViewDto(productMapper.productMapToProductOverviewDto(product, productOverViewDto));
        productResponseDtoForCustomer.setProductDescriptionDto(productMapper.productMapToProductDescriptionDto(product,
                productResponseDtoForCustomer.getProductDescriptionDto()));
        productResponseDtoForCustomer.setProductListImageDto(productMapper.productMapToProductListImageDto(product,
                productResponseDtoForCustomer.getProductListImageDto()));
        productResponseDtoForCustomer.setProductShippingDto(productMapper.productMapToProductShippingDto(product,
                productResponseDtoForCustomer.getProductShippingDto()));
        productResponseDtoForCustomer.setProductListDetailsDto(productMapper.productMapToProductListDetailsDto(product,
                productResponseDtoForCustomer.getProductListDetailsDto()));


        return productResponseDtoForCustomer;
    }

    public ProductResponseForCart productMapToProductResponseForCart(Product product, ProductResponseForCart productResponseForCart){
        productResponseForCart.setProductName(product.getName());
        productResponseForCart.setPrice(product.getPrice());
        productResponseForCart.setDiscountPercent(product.getDiscountPercent());
        productResponseForCart.setMainImage(product.getMainImage());

        return productResponseForCart;
    }
}
