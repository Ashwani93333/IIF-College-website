package com.iifccms.portal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * Public Portal Controller (Hollow Backend Skeleton).
 * Ready for future PostgreSQL JPA repository bindings.
 */
@RestController
@RequestMapping("/public")
@CrossOrigin(origins = "*")
public class PublicPortalController {

    @GetMapping("/courses")
    public ResponseEntity<?> getAllCourses() {
        return ResponseEntity.ok(Map.of("message", "Hollow endpoint: Courses retrieved via DB in full backend"));
    }

    @GetMapping("/notices")
    public ResponseEntity<?> getActiveNotices() {
        return ResponseEntity.ok(Map.of("message", "Hollow endpoint: Notices retrieved via DB in full backend"));
    }

    @PostMapping("/admissions/apply")
    public ResponseEntity<?> submitAdmissionApplication(@RequestBody Map<String, Object> payload) {
        return ResponseEntity.status(201).body(Map.of(
            "message", "Application registered in hollow backend",
            "applicationId", "IIFCCMS-" + System.currentTimeMillis()
        ));
    }

    @PostMapping("/inquiries")
    public ResponseEntity<?> submitInquiry(@RequestBody Map<String, Object> payload) {
        return ResponseEntity.status(201).body(Map.of("message", "Inquiry received"));
    }
}
