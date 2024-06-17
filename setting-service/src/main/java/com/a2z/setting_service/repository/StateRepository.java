package com.a2z.setting_service.repository;

import com.a2z.setting_service.model.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {

    List<State> findAllByOrderByNameAsc();
    List<State> findAllByCountryId(Integer countryId);
}
