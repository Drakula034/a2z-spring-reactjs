package com.a2z.product_service.model.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class CategoryDto {

    private String categoryName;
    private String description;
    private String image;
    private String enabled;

    public String isEnabled() {
        return enabled;
    }
}
