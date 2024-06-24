package com.a2z.setting_service.mapper;

import com.a2z.setting_service.model.dto.ShippingRateDto;
import com.a2z.setting_service.model.entity.ShippingRate;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShippingRateMapper {

    public ShippingRateDto shippingRateMapToShippingRateDto(ShippingRate shippingRate, ShippingRateDto shippingRateDto){

        shippingRateDto.setRate(shippingRate.getRate());
        shippingRateDto.setDays(shippingRate.getDays());
        shippingRateDto.setState(shippingRate.getState());
        shippingRateDto.setCountry(shippingRate.getCountry());
        shippingRateDto.setCashEnabled(shippingRate.isCashEnabled());

        return shippingRateDto;
    }
}
