package com.a2z.order_service.services.feignclient;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("customer-service")
public interface CustomerServiceClient {
}
