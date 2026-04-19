package com.aicourse.controller;

import com.aicourse.model.Milestone;
import com.aicourse.model.ProjectStats;
import com.aicourse.model.Task;
import com.aicourse.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/milestones")
    public ResponseEntity<List<Milestone>> getMilestones() {
        return ResponseEntity.ok(projectService.getMilestones());
    }

    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getTasks() {
        return ResponseEntity.ok(projectService.getTasks());
    }

    @GetMapping("/stats")
    public ResponseEntity<ProjectStats> getStats() {
        return ResponseEntity.ok(projectService.getStats());
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("AI Course Engine API is running ✅");
    }
}
