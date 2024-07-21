package com.a2z.product_service.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProductListDetailsDto {
    private List<ProductDetailsDto> productDetails = new ArrayList<>();
}
