package com.a2z.cart_service.services.feignclient;

import com.a2z.cart_service.model.serviceDto.ProductRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("product-service")
public interface ProductServiceClient {

    @GetMapping(value = "/api/admin/products/{productId}", consumes = "application/json")
    public ResponseEntity<ProductRequestDto> getProductByIdForOrderService(@PathVariable String productId);
}
