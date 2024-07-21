package com.a2z.product_service.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductOverViewDto {

    private String name;
    private String alias;
    private String categoryName;
    private String brandName;
    private boolean enabled;
    private boolean inStock;

    private float cost;
    private float price;
    private float discountPercent;

}
