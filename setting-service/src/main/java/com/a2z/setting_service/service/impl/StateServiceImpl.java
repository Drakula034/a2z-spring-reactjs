package com.a2z.setting_service.service.impl;

import com.a2z.setting_service.model.entity.State;
import com.a2z.setting_service.repository.StateRepository;
import com.a2z.setting_service.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateServiceImpl implements StateService {

    @Autowired
    StateRepository stateRepository;

    @Override
    public List<State> getAllStates(Integer countryId) {
        List<State> states = stateRepository.findAllByCountryId(countryId);
        states.sort((a, b) -> a.getName().compareTo(b.getName()));
        return states;
    }
}
