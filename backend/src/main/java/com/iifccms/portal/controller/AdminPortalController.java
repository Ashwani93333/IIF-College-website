package com.iifccms.portal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * Admin Panel Controller (Hollow Backend Skeleton).
 * Ready for future Spring Security 6 & JWT validation.
 */
@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminPortalController {

    @GetMapping("/dashboard/stats")
    public ResponseEntity<?> getDashboardStats() {
        return ResponseEntity.ok(Map.of("message", "Hollow endpoint: Admin stats calculated from DB"));
    }

    @GetMapping("/admissions")
    public ResponseEntity<?> getAdmissions() {
        return ResponseEntity.ok(Map.of("message", "Hollow endpoint: Paginated admissions list"));
    }

    @PostMapping("/notices")
    public ResponseEntity<?> createNotice(@RequestBody Map<String, Object> payload) {
        return ResponseEntity.status(201).body(Map.of("message", "Notice published via hollow backend"));
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @RequestBody Map<String, Object> payload) {
        return ResponseEntity.ok(Map.of("message", "Course updated via hollow backend", "id", id));
    }
}
