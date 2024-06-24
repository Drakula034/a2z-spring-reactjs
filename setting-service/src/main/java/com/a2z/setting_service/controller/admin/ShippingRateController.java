package com.a2z.setting_service.controller.admin;

import com.a2z.setting_service.model.dto.ShippingRateDto;
import com.a2z.setting_service.model.entity.ShippingRate;
import com.a2z.setting_service.service.ShippingRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/admin/shipping")
public class ShippingRateController {

    @Autowired
    ShippingRateService shippingRateService;

    @GetMapping("/all")
    public ResponseEntity<List<ShippingRateDto>> getAllByPage(@RequestParam("pageNum") int pageNum){
        List<ShippingRateDto> ratesDto = shippingRateService.getAllShippingRatesByPage(pageNum);
        return ResponseEntity.status(HttpStatus.OK).body(ratesDto);
    }

    @PostMapping("/create")
    public ResponseEntity<ShippingRateDto> createNew(@RequestBody ShippingRateDto shippingRateDto){

        ShippingRateDto savedShippingRateDto = shippingRateService.createNewShippingRate(shippingRateDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedShippingRateDto);

    }
}
