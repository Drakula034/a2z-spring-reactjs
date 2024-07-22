package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductShippingDto {

    private Float length;
    private Float width;
    private Float height;
    private Float weight;
}
