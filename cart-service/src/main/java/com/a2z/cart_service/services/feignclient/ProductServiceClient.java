package com.a2z.cart_service.services.feignclient;

import com.a2z.cart_service.model.serviceDto.ProductRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="product-service", url= "http://localhost:8090")
@Component
public interface ProductServiceClient {

    @GetMapping(value = "/api/admin/products/{productId}")
     ResponseEntity<ProductRequestDto> getProductByIdForOrderService(@PathVariable String productId);
}
