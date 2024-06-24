package com.a2z.setting_service.service.impl;

import com.a2z.setting_service.mapper.ShippingRateMapper;
import com.a2z.setting_service.model.dto.ShippingRateDto;
import com.a2z.setting_service.model.entity.ShippingRate;
import com.a2z.setting_service.repository.ShippingRateRepository;
import com.a2z.setting_service.service.ShippingRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShippingRateServiceImpl implements ShippingRateService {

    private final int RATES_PER_PAGE = 10;

    @Autowired
    ShippingRateRepository shippingRateRepository;
    @Autowired
    ShippingRateMapper shippingRateMapper;

    @Override
    public ShippingRateDto createNewShippingRate(ShippingRateDto shippingRateDto) {

        ShippingRate shippingRate = new ShippingRate();
        shippingRate.setCountry(shippingRateDto.getCountry());
        shippingRate.setState(shippingRateDto.getState());
        shippingRate.setDays(shippingRateDto.getDays());
        shippingRate.setRate(shippingRateDto.getRate());
        shippingRate.setCashEnabled(shippingRateDto.isCashEnabled());

        ShippingRate savedShippingRate = shippingRateRepository.save(shippingRate);

        return shippingRateMapper.shippingRateMapToShippingRateDto(savedShippingRate, new ShippingRateDto());
    }

    @Override
    public List<ShippingRateDto> getAllShippingRatesByPage(int page) {
        int pageSize = RATES_PER_PAGE;
        Pageable pageable = PageRequest.of(page-1, pageSize);
        Page<ShippingRate> rates = shippingRateRepository.findAll(pageable);
        // Map entities to DTOs
        List<ShippingRateDto> ratesDto = rates.getContent().stream()
                .map(rate -> shippingRateMapper.shippingRateMapToShippingRateDto(rate, new ShippingRateDto()))
                .collect(Collectors.toList());
        return ratesDto;
    }


}
