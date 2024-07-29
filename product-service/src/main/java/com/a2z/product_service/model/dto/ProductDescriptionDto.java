package com.a2z.product_service.model.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDescriptionDto {
    @Size(max = 512)
    private String shortDescription;
    @Size(max = 4000)
    private String fullDescription;

    public String toString(){
        return "Short Description: " + shortDescription + ", Full Description: " + fullDescription;
    }
}
