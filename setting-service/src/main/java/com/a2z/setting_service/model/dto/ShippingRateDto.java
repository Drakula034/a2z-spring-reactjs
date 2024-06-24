package com.a2z.setting_service.model.dto;

import com.a2z.setting_service.model.entity.Country;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShippingRateDto {

    private float rate;
    private int days;
    private boolean cashEnabled;
    private Country country;

    private String state;
}
