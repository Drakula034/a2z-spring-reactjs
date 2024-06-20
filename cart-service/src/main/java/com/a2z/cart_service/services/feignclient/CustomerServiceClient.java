package com.a2z.cart_service.services.feignclient;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("customer-service")
public interface CustomerServiceClient {
}
