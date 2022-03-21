package com.group6.not_my_fitness_pal.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SpringGlobalConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Configure which route in the controller the mapping applies to
        registry.addMapping("/food/all")
                // Accept requests originating from this location
                .allowedOrigins("http://localhost:3000")
                // Acceptable parameters for headers, eg. authentication, content-type, etc
                // We leave the wildcard here as there are many more headers to consider than we've covered so far
                .allowedHeaders("*")
                // HTTP methods the origin is allowed to make
                .allowedMethods("GET");

        registry.addMapping("/food")

                .allowedOrigins("http://localhost:3000")

                .allowedHeaders("*")

                .allowedMethods("POST");
    }
}

