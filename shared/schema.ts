import { pgTable, text, serial, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  tags: text("tags").array().notNull(),
  link: text("link"),
  githubLink: text("github_link"),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  school: text("school").notNull(),
  year: text("year").notNull(),
  grade: text("grade"),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  items: text("items").array().notNull(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const contact = pgTable("contact", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  link: text("link").notNull(),
  label: text("label").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertExperienceSchema = createInsertSchema(experience);
export const insertEducationSchema = createInsertSchema(education);
export const insertSkillSchema = createInsertSchema(skills);
export const insertAchievementSchema = createInsertSchema(achievements);
export const insertContactSchema = createInsertSchema(contact);

export type Project = typeof projects.$inferSelect;
export type Experience = typeof experience.$inferSelect;
export type Education = typeof education.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Achievement = typeof achievements.$inferSelect;
export type Contact = typeof contact.$inferSelect;
