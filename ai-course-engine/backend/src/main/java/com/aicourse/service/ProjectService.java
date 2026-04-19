package com.aicourse.service;

import com.aicourse.model.Milestone;
import com.aicourse.model.ProjectStats;
import com.aicourse.model.Task;
import com.aicourse.repository.MilestoneRepository;
import com.aicourse.repository.TaskRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectService {

    private final MilestoneRepository milestoneRepo;
    private final TaskRepository taskRepo;

    public ProjectService(MilestoneRepository milestoneRepo, TaskRepository taskRepo) {
        this.milestoneRepo = milestoneRepo;
        this.taskRepo = taskRepo;
    }

    @PostConstruct
    public void seedData() {
        if (milestoneRepo.count() == 0) {
            milestoneRepo.saveAll(List.of(
                new Milestone(null, "Data Collection & EDA", "Month 1 · Feb – Mar 2026",
                    "Collect course catalog, student transcript data, and career outcome datasets. Perform EDA, clean data, build feature store, and design system architecture.",
                    "🗄️", 1),
                new Milestone(null, "LLM Integration & Model Dev", "Month 2 · Mar – Apr 2026",
                    "Fine-tune LLM prompts with LangChain for course understanding. Build hybrid recommendation model combining collaborative filtering with LLM-powered reasoning.",
                    "🧠", 2),
                new Milestone(null, "Deployment & Evaluation", "Month 3 · Apr – May 2026",
                    "Deploy on AWS with a Flask/React dashboard. Conduct A/B testing, evaluate with precision/recall metrics, and gather student feedback for iteration.",
                    "🚀", 3)
            ));
        }

        if (taskRepo.count() == 0) {
            taskRepo.saveAll(List.of(
                new Task(null, "Data Collection", "Feb 1", "Feb 10", "Completed", 100, "Multiple datasets collected"),
                new Task(null, "Data Cleaning & Preprocessing", "Feb 8", "Feb 18", "Completed", 100, "Handled nulls & formatting"),
                new Task(null, "EDA & Feature Engineering", "Feb 15", "Feb 25", "Completed", 100, "Key features identified"),
                new Task(null, "System Architecture Design", "Feb 22", "Feb 28", "Completed", 100, "Hybrid model design finalized"),
                new Task(null, "LangChain Integration Setup", "Mar 1", "Mar 8", "Completed", 100, "Pipeline created"),
                new Task(null, "Prompt Engineering (Iterations)", "Mar 5", "Mar 15", "In Progress", 75, "Multiple refinements"),
                new Task(null, "Hybrid Model Development", "Mar 10", "Mar 20", "In Progress", 70, "CF + LLM integration"),
                new Task(null, "Testing & Output Validation", "Mar 15", "Mar 25", "In Progress", 50, "Accuracy tuning ongoing"),
                new Task(null, "Adjustment: Prompt Delay", "Mar 12", "Mar 20", "Ongoing", 0, "Extra tuning required"),
                new Task(null, "AWS Deployment Prep", "Mar 25", "Apr 5", "Not Started", 0, "Next milestone"),
                new Task(null, "Dashboard Development", "Apr 1", "Apr 15", "Not Started", 0, "UI pending"),
                new Task(null, "Evaluation & Feedback", "Apr 15", "Apr 30", "Not Started", 0, "Final phase")
            ));
        }
    }

    public List<Milestone> getMilestones() {
        return milestoneRepo.findAllByOrderByOrderIndexAsc();
    }

    public List<Task> getTasks() {
        return taskRepo.findAll();
    }

    public ProjectStats getStats() {
        return new ProjectStats("50%", "35%", "90%+", "12 Weeks", "$1,800", "$800/yr", "$500");
    }
}
