package com.iifccms.portal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * Authentication Controller (Hollow Backend Skeleton).
 * Demo credentials handled in frontend state during current phase.
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        return ResponseEntity.ok(Map.of(
            "accessToken", "demo-jwt-token-hollow",
            "tokenType", "Bearer",
            "username", credentials.getOrDefault("username", "admin@iifccms.edu.in"),
            "role", "ROLE_SUPER_ADMIN"
        ));
    }
}
