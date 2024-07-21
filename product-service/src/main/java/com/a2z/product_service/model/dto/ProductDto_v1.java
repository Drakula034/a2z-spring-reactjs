package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductDto_v1 {

//    for overview

    private String name;
    private String alias;
// for description
    private String shortDescription;
    private String fullDescription;

//    for overview
    private boolean enabled;
    private boolean inStock;

    private float cost;
    private float price;
    private float discountPercent;

//    for shipping

    private float length;
    private float width;
    private float height;
    private float weight;
//    for cateogry and brand-> overview
    private String categoryName;
    private String brandName;

    public boolean getEnabled() {
        return enabled;
    }
}
