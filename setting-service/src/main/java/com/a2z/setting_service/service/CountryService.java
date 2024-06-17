package com.a2z.setting_service.service;

import com.a2z.setting_service.model.entity.Country;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface CountryService {
    Integer createCountry(Country country);
    List<Country> getAllCountry();

//    String updateCountry(Country country, Integer id);
    boolean deleteCountry(Integer id);
}
