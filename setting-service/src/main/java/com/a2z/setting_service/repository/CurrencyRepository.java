package com.a2z.setting_service.repository;

import com.a2z.setting_service.model.entity.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Integer> {
    List<Currency> findAllByOrderByNameAsc();

}
