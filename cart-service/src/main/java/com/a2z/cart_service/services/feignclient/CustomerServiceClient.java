package com.a2z.cart_service.services.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;

@Component
@FeignClient(value = "customer-service", url = "http://localhost:8095")
public interface CustomerServiceClient {
}
