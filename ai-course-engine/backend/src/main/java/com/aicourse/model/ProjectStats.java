package com.aicourse.model;

public record ProjectStats(
    String accuracyImprovement,
    String advisorWorkloadReduction,
    String studentSatisfactionTarget,
    String duration,
    String totalBudget,
    String awsCost,
    String openAiCost
) {}
