package com.a2z.setting_service.controller.admin;

import com.a2z.setting_service.mapper.StateMapper;
import com.a2z.setting_service.model.dto.StateDto;
import com.a2z.setting_service.model.entity.State;
import com.a2z.setting_service.service.StateService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;

@Controller
@RequestMapping("api/admin/states")
public class StateRestController {

    private final StateService stateService;
    private final StateMapper stateMapper;

    public StateRestController(StateService stateService, StateMapper stateMapper) {
        this.stateService = stateService;
        this.stateMapper = stateMapper;
    }

    @GetMapping("/list-by-country/{id}")
    public ResponseEntity<List<StateDto>> getAllStatesByCountry(@PathVariable("id") Integer countryId){
        List<State> allStates = stateService.getAllStates(countryId);
        List<StateDto> stateDtos = new ArrayList<>();
        for(State state : allStates){
            stateDtos.add(StateMapper.stateMapToStateDto(state, new StateDto()));
        }

        return ResponseEntity.status(200).body(stateDtos);

    }

}
