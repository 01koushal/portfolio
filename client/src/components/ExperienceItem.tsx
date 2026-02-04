import { Experience } from "@shared/schema";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function ExperienceItem({ experience, index, isLast }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline line for desktop */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-[50%] top-0 w-3 h-3 rounded-full bg-primary -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_0_4px_hsl(var(--background))]"></div>

      <div className={`md:flex justify-between items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        {/* Empty space for the other side */}
        <div className="hidden md:block w-1/2"></div>
        
        {/* Content */}
        <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"} mb-8 md:mb-12`}>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-1 font-mono">
              <Briefcase size={14} />
              {experience.duration}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{experience.role}</h3>
            <div className="text-lg text-primary/90 font-medium mb-4">{experience.company}</div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
