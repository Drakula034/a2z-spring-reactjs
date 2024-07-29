package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDetailsDto {

    private String name;
    private String value;
    private Integer productId;

    public String toString(){
        return "ProductDetailsDto{" +
                "name='" + name + '\'' +
                ", value='" + value + '\'' +
                ", productId=" + productId +
                '}';
    }
}
