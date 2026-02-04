import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Linkedin, Download, Terminal, Code2, Server, Database } from "lucide-react";
import { 
  useProjects, 
  useExperience, 
  useEducation, 
  useSkills, 
  useAchievements, 
  useContact 
} from "@/hooks/use-portfolio";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const { data: education, isLoading: educationLoading } = useEducation();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: achievements, isLoading: achievementsLoading } = useAchievements();
  const { data: contact, isLoading: contactLoading } = useContact();

  const handleContactClick = (link: string) => {
    window.open(link, '_blank');
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSkillIcon = (category: string) => {
    if (category.toLowerCase().includes('backend')) return <Server className="w-5 h-5" />;
    if (category.toLowerCase().includes('language')) return <Code2 className="w-5 h-5" />;
    if (category.toLowerCase().includes('devops')) return <Terminal className="w-5 h-5" />;
    return <Database className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-mono text-sm mb-6 border border-primary/20">
              Hello, I'm
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              Koushal <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Pala</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
              Software Engineer & <span className="text-foreground">Full Stack Developer</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Computer Science undergraduate building scalable software, automation workflows, and real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="group h-12 px-8 rounded-full text-base font-semibold bg-primary hover:bg-blue-600 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)]"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/koushalpala', '_blank')} 
                className="h-12 px-8 rounded-full text-base font-semibold border-border hover:bg-accent/50"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A collection of applications that showcase my technical capabilities."
            centered
          />
          
          {projectsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 rounded-xl bg-card/50 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Work Experience" 
            subtitle="My professional journey in the tech industry."
            centered
          />
          
          <div className="relative mt-12">
            {experienceLoading ? (
              <div className="space-y-8">
                {[1, 2].map((i) => (
                  <div key={i} className="h-40 rounded-xl bg-card/50 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="space-y-0">
                {experience?.map((exp, index) => (
                  <ExperienceItem 
                    key={exp.id} 
                    experience={exp} 
                    index={index} 
                    isLast={index === (experience?.length || 0) - 1} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Technical Skills" 
            subtitle="Technologies and tools I work with."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillsLoading ? (
              [1, 2, 3, 4].map((i) => <div key={i} className="h-48 rounded-xl bg-card/50 animate-pulse" />)
            ) : (
              skills?.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {getSkillIcon(skillGroup.category)}
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 rounded-md bg-accent/50 text-accent-foreground text-sm font-medium border border-border/50 hover:border-primary/30 hover:bg-accent transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Education & Achievements Grid */}
      <section id="education" className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                Education
                <div className="h-1 w-12 bg-primary rounded-full" />
              </h2>
            </div>
            
            {educationLoading ? (
               <div className="h-40 rounded-xl bg-card/50 animate-pulse" />
            ) : (
              <div className="space-y-6">
                {education?.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                      <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-muted-foreground mb-2">{edu.degree}</p>
                    {edu.grade && (
                      <p className="text-sm text-muted-foreground">
                        Grade: <span className="text-foreground font-semibold">{edu.grade}</span>
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Achievements Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                Achievements
                <div className="h-1 w-12 bg-primary rounded-full" />
              </h2>
            </div>
            
            {achievementsLoading ? (
               <div className="h-40 rounded-xl bg-card/50 animate-pulse" />
            ) : (
              <div className="space-y-6">
                {achievements?.map((ach, index) => (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2">{ach.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ach.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Looking for opportunities? Let's connect."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {contactLoading ? (
              [1, 2, 3].map(i => <div key={i} className="h-24 bg-card/50 animate-pulse rounded-xl" />)
            ) : (
              contact?.map((item, index) => {
                const Icon = item.platform.toLowerCase().includes('github') ? Github :
                             item.platform.toLowerCase().includes('linkedin') ? Linkedin :
                             Mail;
                
                return (
                  <motion.a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.platform}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{item.label}</p>
                  </motion.a>
                );
              })
            )}
          </div>

          <div className="mt-24 pt-8 border-t border-border/50 text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Koushal Pala. Built with React & Tailwind.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
