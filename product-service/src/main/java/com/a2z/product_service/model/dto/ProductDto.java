package com.a2z.product_service.model.dto;

import com.a2z.product_service.model.entity.Brand;
import com.a2z.product_service.model.entity.Category;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class ProductDto {


    private String name;
    private String alias;

    private String shortDescription;
    private String fullDescription;

//    private Date createdTime;
//    private Date updatedTime;

    private boolean enabled;
    private boolean inStock;

    private float cost;

    private float price;
    private float discountPercent;


    private float length;
    private float width;
    private float height;
    private float weight;
    private String categoryName;
    private String brandName;

    public boolean getEnabled() {
        return enabled;
    }
}
