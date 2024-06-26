package com.a2z.setting_service;

import com.a2z.setting_service.enums.SettingCategory;
import com.a2z.setting_service.model.entity.Setting;
import com.a2z.setting_service.repository.SettingRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@Rollback(value = true)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class SettingRepositoryTests {

    @Autowired
    SettingRepository settingRepository;

    @Test
    public void createGeneralSettingsTest(){
        Setting siteName = new Setting("SITE_NAME","A2Z", SettingCategory.GENERAL);
        Setting siteLogo = new Setting("SITE_LOGO","A2Z", SettingCategory.GENERAL);
        Setting copyright = new Setting("COPYRIGHT", "Copyright (c) 2024 A2Z Ltd", SettingCategory.GENERAL);

        settingRepository.saveAll(List.of(siteName, siteLogo, copyright));

        Iterable<Setting>iterable = settingRepository.findAll();
        assertThat(iterable).size().isGreaterThan(0);
    }

    @Test
    public void createCurrencySettingTest(){
        Setting currencyId = new Setting("CURRENCY_ID","1", SettingCategory.CURRENCY);
        Setting currencyCode = new Setting("CURRENCY_CODE","INR", SettingCategory.CURRENCY);
        Setting decimalDigits = new Setting("DECIMAL_DIGITS","2", SettingCategory.CURRENCY);
        Setting thousandsPointType = new Setting("THOUSANDS_POINT_TYPE","COMMA",SettingCategory.CURRENCY);

        settingRepository.saveAll(List.of(currencyId, currencyCode, thousandsPointType, decimalDigits));

    }
}
