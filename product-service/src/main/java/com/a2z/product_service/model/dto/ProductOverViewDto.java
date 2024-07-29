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

    private Float cost;
    private Float price;
    private Float discountPercent;

    public String toString(){
        return "ProductOverViewDto{" +
                "name='" + name + '\'' +
                ", alias='" + alias + '\'' +
                ", categoryName='" + categoryName + '\'' +
                ", brandName='" + brandName + '\'' +
                ", enabled=" + enabled +
                ", inStock=" + inStock +
                ", cost=" + cost +
                ", price=" + price +
                ", discountPercent=" + discountPercent +
                '}';
    }

}
