package com.a2z.setting_service.controller.admin;

import com.a2z.setting_service.mapper.CountryMapper;
import com.a2z.setting_service.model.dto.CountryRequestDto;
import com.a2z.setting_service.model.dto.CountryResponseDto;
import com.a2z.setting_service.model.entity.Country;
import com.a2z.setting_service.repository.CountryRepository;
import com.a2z.setting_service.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("api/admin/countries")
public class CountryRestController {
    private final CountryService countryService;

    private final CountryMapper countryMapper;
    public CountryRestController( CountryMapper countryMapper, CountryService countryService) {
        this.countryMapper = countryMapper;
        this.countryService = countryService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<CountryResponseDto>> getAllCountry() {
        List<Country> countries = countryService.getAllCountry();
        List<CountryResponseDto> countryResponseDtos = new ArrayList<>();
        for (Country country : countries) {
//            CountryResponseDto countryResponseDto = new CountryResponseDto();
            CountryResponseDto countryDto = countryMapper.countryMapToCountryResponseDto(country, new CountryResponseDto());
            countryResponseDtos.add(countryDto);
        }
        return ResponseEntity.ok(countryResponseDtos);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createCountry(@RequestBody CountryRequestDto countryDto){
        Country country = CountryMapper.countryRequestDtoMapToCountry(countryDto, new Country());
//        System.out.println(country);
        Integer savedCountryId = countryService.createCountry(country);
        return ResponseEntity.ok("Country created successfully with id: " + savedCountryId);
    }

//    @PatchMapping("/update/{id}")
//    public ResponseEntity<String> updateCountry(@RequestBody CountryRequestDto countryRequestDto, @PathVariable("id") String countryId){
//
//        try{
//            Integer id = Integer.parseInt(countryId);
//
//        }catch (NumberFormatException e) {
//            return ResponseEntity.badRequest().body("Invalid country id format");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update country: " + e.getMessage());
//        }
//
//    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<String> deleteCountry(@PathVariable("id") String countryId){
        try{
            Integer id = Integer.parseInt(countryId);
            Boolean success = countryService.deleteCountry(id);
            String message = "";
            if(success){
                message = "Country deleted successfully";
            }else{
                message = "Failed to delete country";
            }
            return ResponseEntity.ok(message);
        }catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid country id format");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete country: " + e.getMessage());
        }
    }
}
