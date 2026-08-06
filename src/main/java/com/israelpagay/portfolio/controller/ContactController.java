package com.israelpagay.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @PostMapping
    public ResponseEntity<String> submit(@RequestBody Map<String, Object> payload) {
        // Log the payload to the application console for now.
        System.out.println("[Contact] " + payload);
        return ResponseEntity.ok("Received");
    }
}
