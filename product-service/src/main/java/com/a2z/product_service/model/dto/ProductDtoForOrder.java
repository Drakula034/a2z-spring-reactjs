package com.a2z.product_service.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDtoForOrder {

    private String name;
    private float cost;

    private float price;
    private float discountPercent;
}
