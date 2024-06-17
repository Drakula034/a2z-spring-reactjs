package com.a2z.setting_service.service;

import com.a2z.setting_service.model.entity.State;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface StateService {

    List<State> getAllStates(Integer countryId);
}
