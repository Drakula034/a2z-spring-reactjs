package com.a2z.setting_service.repository;

import com.a2z.setting_service.model.entity.ShippingRate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingRateRepository extends JpaRepository<ShippingRate, Integer> {
    @Query("select s from ShippingRate s where s.country.id =?1 and s.state =?2")
    ShippingRate findByCountryAndState(int id, String state);

    Page<ShippingRate> findAll(Pageable pageable);
}
