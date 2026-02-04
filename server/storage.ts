import { 
  projects, experience, education, skills, achievements, contact,
  type Project, type Experience, type Education, type Skill, type Achievement, type Contact,
  type InsertProject, type InsertExperience, type InsertEducation, type InsertSkill, type InsertAchievement, type InsertContact
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
  getSkills(): Promise<Skill[]>;
  getAchievements(): Promise<Achievement[]>;
  getContact(): Promise<Contact[]>;

  createProject(project: InsertProject): Promise<Project>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  createEducation(education: InsertEducation): Promise<Education>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getAchievements(): Promise<Achievement[]> {
    return await db.select().from(achievements);
  }

  async getContact(): Promise<Contact[]> {
    return await db.select().from(contact);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const [exp] = await db.insert(experience).values(insertExperience).returning();
    return exp;
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const [edu] = await db.insert(education).values(insertEducation).returning();
    return edu;
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db.insert(skills).values(insertSkill).returning();
    return skill;
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const [ach] = await db.insert(achievements).values(insertAchievement).returning();
    return ach;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [con] = await db.insert(contact).values(insertContact).returning();
    return con;
  }
}

export const storage = new DatabaseStorage();
