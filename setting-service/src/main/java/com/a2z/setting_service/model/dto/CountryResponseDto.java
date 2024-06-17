package com.a2z.setting_service.model.dto;

import com.a2z.setting_service.model.entity.State;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CountryResponseDto {

    private String name;
    private String code;
    @OneToMany(mappedBy = "country")
    private List<String> states = new ArrayList<>();
}
