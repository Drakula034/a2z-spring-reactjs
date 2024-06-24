package com.a2z.setting_service.service;

import com.a2z.setting_service.model.dto.ShippingRateDto;
import com.a2z.setting_service.model.entity.ShippingRate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ShippingRateService {

    ShippingRateDto createNewShippingRate(ShippingRateDto shippingRateDto);
    List<ShippingRateDto> getAllShippingRatesByPage(int page);
}
