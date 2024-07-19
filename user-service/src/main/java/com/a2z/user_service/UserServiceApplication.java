package com.a2z.user_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

//@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
//@EnableJpaRepositories("com.a2z.user_service.repository")
@SpringBootApplication
//@ComponentScan({"com.a2z.user_service.service", "com.a2z.user_service.service.Impl"})
@EnableJpaAuditing(auditorAwareRef = "auditAwareImpl")
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }

}
