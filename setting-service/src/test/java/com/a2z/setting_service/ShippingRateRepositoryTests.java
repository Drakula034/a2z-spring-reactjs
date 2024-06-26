package com.a2z.setting_service;

import com.a2z.setting_service.model.entity.Country;
import com.a2z.setting_service.model.entity.ShippingRate;
import com.a2z.setting_service.repository.ShippingRateRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.StatusResultMatchersExtensionsKt.isEqualTo;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(true)
public class ShippingRateRepositoryTests {

    @Autowired
    ShippingRateRepository shippingRateRepository;

    @Test
    public void createShippingRateTest(){
        Country country = new Country(2);
        ShippingRate sp = new ShippingRate();
        sp.setCountry(country);
        sp.setRate(8.2f);
        sp.setDays(4);
        sp.setState("Delhi");
        sp.setCashEnabled(true);

        ShippingRate savedRate = shippingRateRepository.save(sp);

        assertThat(savedRate).isNotNull();
        assertThat(savedRate.getId()).isGreaterThan(0);


    }

    @Test
    public void updateRateTest(){
        Integer id = 1;
        ShippingRate shippingRate = shippingRateRepository.findById(id).get();
        shippingRate.setRate(9.8f);
        shippingRate.setDays(3);

        ShippingRate savedRate = shippingRateRepository.save(shippingRate);
        assertThat(savedRate.getRate()).isEqualTo(9.8f);
        assertThat(savedRate.getDays()).isEqualTo(3);

    }

    @Test
    public void findAllRateTest(){
        Iterable<ShippingRate> shippingRates = shippingRateRepository.findAll();
        assertThat(shippingRates).hasSizeGreaterThan(0);
        shippingRates.forEach(System.out::println);

    }

    @Test
    public void findByCountryAndStateTest(){
        int countryId = 11;
        String state = "Berlin";
        ShippingRate shippingRate = shippingRateRepository.findByCountryAndState(countryId, state);

        assertThat(shippingRate).isNotNull();
        assertThat(shippingRate.getCountry().getId()).isEqualTo(countryId);
        assertThat(shippingRate.getState()).isEqualTo(state);
        System.out.println(shippingRate);
    }
}
