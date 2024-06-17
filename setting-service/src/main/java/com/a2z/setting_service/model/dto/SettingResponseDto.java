package com.a2z.setting_service.model.dto;

import com.a2z.setting_service.model.entity.Currency;
import com.a2z.setting_service.model.entity.Setting;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Getter
@Setter
public class SettingResponseDto {

    private List<Setting> settingList;
    private List<Currency> currencysList;
}
