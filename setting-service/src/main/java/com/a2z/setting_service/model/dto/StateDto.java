package com.a2z.setting_service.model.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.relational.core.sql.In;

@Getter
@Setter
public class StateDto {

    private Integer id;

    private String name;
}
