package com.a2z.product_service.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.relational.core.sql.In;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BrandNamesDto {

    private Integer brandId;
    private String brandName;
}
