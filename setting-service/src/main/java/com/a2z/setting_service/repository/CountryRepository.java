package com.a2z.setting_service.repository;

import com.a2z.setting_service.model.entity.Country;
import com.a2z.setting_service.model.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {

    List<Country> findAllByOrderByNameAsc();
}
