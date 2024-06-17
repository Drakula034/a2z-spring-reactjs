package com.a2z.setting_service.controller.admin;

import com.a2z.setting_service.model.dto.SettingResponseDto;
import com.a2z.setting_service.model.entity.Currency;
import com.a2z.setting_service.model.entity.Setting;
import com.a2z.setting_service.repository.CurrencyRepository;
import com.a2z.setting_service.service.SettingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@Controller
@RequestMapping("api/admin/settings")
public class SettingController {

    @Autowired
    SettingService settingService;
    @Autowired
    CurrencyRepository currencyRepository;

    @GetMapping("/all")
    public ResponseEntity<SettingResponseDto>listAllSettings(){
        List<Setting> settings = settingService.getAllSettings();
        List<Currency> currencies = currencyRepository.findAllByOrderByNameAsc();

        SettingResponseDto settingResponseDto = new SettingResponseDto();
        settingResponseDto.setSettingList(settings);
        settingResponseDto.setCurrencysList(currencies);
        return ResponseEntity.status(200).body(settingResponseDto);
    }
}
