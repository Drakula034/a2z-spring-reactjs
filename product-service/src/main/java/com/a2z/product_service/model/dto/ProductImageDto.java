package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductImageDto {

    private String name;
    private Integer productId;

    public String toString(){
        return "ProductImageDto{" +
                "name='" + name + '\'' +
                ", productId=" + productId +
                '}';
    }
}
