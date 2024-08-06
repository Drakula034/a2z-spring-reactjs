package com.a2z.cart_service.services.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Component
@FeignClient(value = "customer-service", url = "http://localhost:8095")
public interface CustomerServiceClient {

    @GetMapping("/api/customers/exists/{customerId}")
    public ResponseEntity<Boolean> isCustomerExists(@PathVariable Integer customerId);
}
