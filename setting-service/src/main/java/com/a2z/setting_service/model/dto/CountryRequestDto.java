package com.a2z.setting_service.model.dto;

import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CountryRequestDto {
    private String name;
    private String code;
    private List<String> states;
}

