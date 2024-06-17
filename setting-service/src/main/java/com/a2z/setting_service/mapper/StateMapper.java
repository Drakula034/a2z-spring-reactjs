package com.a2z.setting_service.mapper;

import com.a2z.setting_service.model.dto.StateDto;
import com.a2z.setting_service.model.entity.State;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StateMapper {

    public static StateDto stateMapToStateDto(State state, StateDto stateDto){
        stateDto.setName(state.getName());
        stateDto.setId(state.getId());
        return stateDto;
    }
}
