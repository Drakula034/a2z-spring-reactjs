package com.a2z.setting_service.service.impl;

import com.a2z.setting_service.model.entity.Setting;
import com.a2z.setting_service.repository.SettingRepository;
import com.a2z.setting_service.service.SettingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SettingServiceImpl implements SettingService {
    @Autowired
    SettingRepository settingRepository;

    public List<Setting> getAllSettings(){
        return settingRepository.findAll();
    }
}
