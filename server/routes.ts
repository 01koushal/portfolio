import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.experience.list.path, async (req, res) => {
    const experience = await storage.getExperience();
    res.json(experience);
  });

  app.get(api.education.list.path, async (req, res) => {
    const education = await storage.getEducation();
    res.json(education);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.achievements.list.path, async (req, res) => {
    const achievements = await storage.getAchievements();
    res.json(achievements);
  });

  app.get(api.contact.list.path, async (req, res) => {
    const contact = await storage.getContact();
    res.json(contact);
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Fake Certificate Detector",
      description: "Full-stack web application built using Flask, HTML, CSS, and JavaScript. Automated data scraping using Selenium. Implemented server-side validation and REST APIs. Designed modular backend architecture.",
      tags: ["Flask", "HTML/CSS/JS", "Selenium", "REST APIs"],
      githubLink: "https://github.com/01koushal/techstorm_nexus"
    });
    
    await storage.createProject({
      title: "AI Shorts Automation Agent",
      description: "End-to-end automation pipeline generating scripts, audio, subtitles, and short-form videos. Automates YouTube uploads with metadata. Uses Python, n8n, FFmpeg, Hugging Face. Deployed using Docker.",
      tags: ["Python", "n8n", "FFmpeg", "Hugging Face", "Docker"],
      link: "https://www.youtube.com/@FactActVibe"
    });

    await storage.createProject({
      title: "House Price Predictor",
      description: "Machine learning project using Linear Regression for price prediction. Includes data preprocessing, feature selection, and model evaluation. Deployed as a live web application.",
      tags: ["Machine Learning", "Linear Regression", "Python"],
      link: "https://house-price-prediction-ko64.onrender.com/"
    });
  }

  const existingExperience = await storage.getExperience();
  if (existingExperience.length === 0) {
    await storage.createExperience({
      role: "Python Developer Virtual Internship",
      company: "Infosys Springboard",
      duration: "2025 – Present",
      description: "Focus on writing modular Python code, applying software engineering best practices, and working on real-world problem statements."
    });

    await storage.createExperience({
      role: "AI/ML Virtual Internship",
      company: "Eduskills",
      duration: "July 2024 – September 2024",
      description: "Focus on supervised and unsupervised learning, classification, clustering, preprocessing, and model evaluation."
    });
  }

  const existingEducation = await storage.getEducation();
  if (existingEducation.length === 0) {
    await storage.createEducation({
      degree: "B.Tech in Computer Science and Engineering",
      school: "SR University",
      year: "2023 – 2027",
      grade: "CGPA: 8.4"
    });
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    await storage.createSkill({
      category: "Languages",
      items: ["Python", "Java", "JavaScript", "SQL", "C"]
    });
    await storage.createSkill({
      category: "Backend & Web",
      items: ["Flask", "REST APIs", "HTML", "CSS"]
    });
    await storage.createSkill({
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Docker", "Selenium", "n8n"]
    });
    await storage.createSkill({
      category: "CS Fundamentals",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "OS"]
    });
  }

  const existingAchievements = await storage.getAchievements();
  if (existingAchievements.length === 0) {
    await storage.createAchievement({
      title: "SRU Hackathon (1st Year)",
      description: "Won 3rd Prize."
    });
    await storage.createAchievement({
      title: "Academic Excellence (2nd Year)",
      description: "Received Certificate of Appreciation."
    });
  }

  const existingContact = await storage.getContact();
  if (existingContact.length === 0) {
    await storage.createContact({
      platform: "GitHub",
      link: "https://github.com/01koushal",
      label: "github.com/01koushal"
    });
    await storage.createContact({
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/koushalpala",
      label: "linkedin.com/in/koushalpala"
    });
    await storage.createContact({
      platform: "Email",
      link: "mailto:koushalpala@gmail.com",
      label: "koushalpala@gmail.com"
    });
  }
}
