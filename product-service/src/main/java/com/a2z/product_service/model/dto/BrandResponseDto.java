package com.a2z.product_service.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BrandResponseDto {

    private Integer brandId;
    private String brandName;
    private String brandLogo;

    private Set<CategoryResponseDto> categories;
}
