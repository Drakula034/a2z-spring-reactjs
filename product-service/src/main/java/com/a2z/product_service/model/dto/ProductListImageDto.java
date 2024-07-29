package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Getter
@Setter
public class ProductListImageDto {

    private String mainImage;
    private List<ProductImageDto> productImages = new ArrayList<>();

    public String toString(){
        return "ProductListImageDto{" +
                "mainImage='" + mainImage + '\'' +
                ", productImages=" + productImages.toString() +
                '}';
    }
}
