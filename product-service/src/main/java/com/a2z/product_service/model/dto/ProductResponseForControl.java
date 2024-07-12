package com.a2z.product_service.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.relational.core.sql.In;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponseForControl {

    private Integer enabled;
    private Integer disabled;
    private Integer inStocks;
    private Integer outOfStocks;
}
