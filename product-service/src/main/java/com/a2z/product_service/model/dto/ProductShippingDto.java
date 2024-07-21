package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductShippingDto {

    private float length;
    private float width;
    private float height;
    private float weight;
}
