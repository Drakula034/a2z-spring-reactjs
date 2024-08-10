package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponseForCart {

    private String productName;
    private float price;
    private float discountPercent;
    private String mainImage;
}
