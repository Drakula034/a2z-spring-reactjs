package com.a2z.setting_service.service.impl;

import com.a2z.setting_service.model.entity.Country;
import com.a2z.setting_service.model.entity.State;
import com.a2z.setting_service.repository.CountryRepository;
import com.a2z.setting_service.repository.StateRepository;
import com.a2z.setting_service.service.CountryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.*;

@Service
public class CountryServiceImpl implements CountryService {
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    StateRepository stateRepository;

    public Integer createCountry(Country country){
        List<State> states = country.getStates();
        Country savedCountry = countryRepository.save(country);
        savedCountry.setStates(states);
        List<State> stateToAdd = new ArrayList<>();
        for(State state : states){
            stateToAdd.add(state);
            stateRepository.save(state);
        }
//        System.out.println(stateToAdd);
        savedCountry.setStates(stateToAdd);
       savedCountry = countryRepository.save(savedCountry);
//        System.out.println(savedCountry);
//        System.out.println(savedCountry.getStates());
        return savedCountry.getId();
    }

    @Override
    public List<Country> getAllCountry() {
        List<Country> countries = countryRepository.findAllByOrderByNameAsc();
        return countries;
    }

    @Override
    public boolean deleteCountry(Integer id) {
        boolean isDeletionSuccessfull = false;
        Optional<Country> countryToDelete = countryRepository.findById(id);
        if(countryToDelete.isPresent()){
            Country country = countryToDelete.get();
            List<State> states = stateRepository.findAllByCountryId(id);
            for(State state : states){
                stateRepository.delete(state);
            }
            countryRepository.delete(country);
            isDeletionSuccessfull = true;
        }
        return isDeletionSuccessfull;
    }

//    @Override
//    public String updateCountry(Country country, Integer id) {
//        Optional<Country> countryToUpdate = countryRepository.findById(id);
//        if(countryToUpdate.isPresent()){
//            Country existingCountry = countryToUpdate.get();
//
//            if(country.getName() != null){
//                existingCountry.setName(country.getName());
//            }
//            if(country.getCode() != null){
//                existingCountry.setCode(country.getCode());
//            }
//            if(country.getStates().size() > 0){
//
//            }
//
//        }
//        return null;
//    }

}
