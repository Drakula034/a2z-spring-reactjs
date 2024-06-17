package com.a2z.setting_service.mapper;

import com.a2z.setting_service.model.dto.CountryRequestDto;
import com.a2z.setting_service.model.dto.CountryResponseDto;
import com.a2z.setting_service.model.entity.Country;
import com.a2z.setting_service.model.entity.State;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class CountryMapper {

    public static CountryResponseDto countryMapToCountryResponseDto(Country country, CountryResponseDto countryResponseDto){
        countryResponseDto.setName(country.getName());
        countryResponseDto.setCode(country.getCode());
        List<State> states = country.getStates();
        if (states != null) {
            for (State state : states) {
                countryResponseDto.getStates().add(state.getName());
            }
        }

        return countryResponseDto;
    }

    public static Country countryRequestDtoMapToCountry(CountryRequestDto countryRequestDto, Country country){
        country.setName(countryRequestDto.getName());
        country.setCode(countryRequestDto.getCode());
        List<State> states = new ArrayList<State>();
        for(String state : countryRequestDto.getStates()){
            State newState = new State();
            newState.setName(state);
            newState.setCountry(country);
            states.add(newState);
        }
        country.setStates(states);
        return country;

    }

}
