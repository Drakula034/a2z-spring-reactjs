package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponseDtoForCustomer {
    private Integer id;
    private ProductOverViewDto productOverViewDto = new ProductOverViewDto();
    private ProductDescriptionDto productDescriptionDto = new ProductDescriptionDto();
    private ProductListImageDto productListImageDto = new ProductListImageDto();
    private ProductListDetailsDto productListDetailsDto = new ProductListDetailsDto();
    private ProductShippingDto productShippingDto = new ProductShippingDto();
}
