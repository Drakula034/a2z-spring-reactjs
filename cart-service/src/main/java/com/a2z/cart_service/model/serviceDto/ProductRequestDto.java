package com.a2z.cart_service.model.serviceDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.beans.Transient;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequestDto {

    private String name;
    private float cost;

    private float price;
    private float discountPercent;

    public String toString() {
        return "ProductRequestDto{" +
                "name='" + name + '\'' +
                ", cost=" + cost +
                ", price=" + price +
                ", discountPercent=" + discountPercent +
                '}';
    }

    @Transient
    public float getDiscountedPrice() {
        if (discountPercent < 100)
            return price - (price * (discountPercent / 100));

        return price;
    }


}
