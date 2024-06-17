package com.a2z.setting_service;

import com.a2z.setting_service.model.entity.Currency;
import com.a2z.setting_service.repository.CurrencyRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)

public class CurrencyRepositoryTests {

    @Autowired
    CurrencyRepository currencyRepository;

    @Test
    public void createCurrenciesTest() {
        List<Currency> currencyList = Arrays.asList(new Currency("United States Dollar", "$", "USD"),
                new Currency("British Pound", "£", "GPB"),
                new Currency("Japanese Yen", "¥", "JPY"),
                new Currency("Euro", "€", "EUR"),
                new Currency("Russian Ruble", "₽", "RUB"),
                new Currency("South Korean Won", "₩", "KRW"),
                new Currency("Chinese Yuan", "¥", "CNY"),
                new Currency("Brazilian Real", "R$", "BRL"),
                new Currency("Australian Dollar", "$", "AUD"),
                new Currency("Canadian Dollar", "$", "CAD"),
                new Currency("Vietnamese đồng ", "₫", "VND"),
                new Currency("Indian Rupee", "₹", "INR"),
                new Currency("Turkish Lira", "₺", "TL")
        );

        currencyRepository.saveAll(currencyList);
        List<Currency> savedCurrencies = currencyRepository.findAll();
        assertThat(savedCurrencies).size().isEqualTo(13);
    }
}
