package com.a2z.setting_service.service;

import com.a2z.setting_service.model.entity.Setting;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface SettingService {
    List<Setting> getAllSettings();
}
