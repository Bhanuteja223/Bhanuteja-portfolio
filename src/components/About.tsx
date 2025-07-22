import { Code, Database, Globe, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Express.js", level: 80 },
    { name: "SQLite", level: 70 },
    { name: "Git & GitHub", level: 85 },
    { name: "REST APIs", level: 85 },
    { name: "Unit Testing", level: 75 }
  ];

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating robust APIs and managing databases for scalable applications"
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end development from conception to deployment"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Writing efficient code and optimizing applications for maximum performance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              About Me
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              A passionate Full Stack Developer with 1+ years of experience in creating modern, scalable web applications using cutting-edge technologies.
            </p>
          </div>

          {/* Professional Summary */}
          <div className={`bg-card rounded-2xl p-8 shadow-portfolio-medium mb-16 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a dedicated Full Stack Developer with 2+ years of experience in building modern web applications. 
                  I specialize in React.js and Node.js ecosystems, with a strong foundation in both frontend and backend technologies. 
                  My passion lies in creating efficient, scalable solutions that provide exceptional user experiences.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-primary mr-2">📍</span>
                    <span>Location: Hyderabad</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-primary mr-2">💼</span>
                    <span>Experience: 1+ Years</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-primary mr-2">🎯</span>
                    <span>Focus: Full Stack Development</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`p-4 bg-muted rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">My Skills</h3>
            <div className="bg-card rounded-2xl p-8 shadow-portfolio-medium">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className={`bg-card rounded-2xl p-8 shadow-portfolio-medium transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <h3 className="text-3xl font-bold text-center mb-8 text-card-foreground">My Journey</h3>
            <div className="max-w-2xl mx-auto">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="pb-8">
                  <h4 className="text-xl font-semibold text-card-foreground">Bachelor of Science in Computer Science</h4>
                  <p className="text-primary font-medium">Tech University</p>
                  <p className="text-muted-foreground">Graduated: 2022</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on software engineering, data structures, algorithms, and web development technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="pb-8">
                  <h4 className="text-xl font-semibold text-card-foreground">Bachelor of Science in Computer Science</h4>
                  <p className="text-primary font-medium">Tech University</p>
                  <p className="text-muted-foreground">Graduated: 2022</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on software engineering, data structures, algorithms, and web development technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="pb-8">
                  <h4 className="text-xl font-semibold text-card-foreground">Bachelor of Science in Computer Science</h4>
                  <p className="text-primary font-medium">Tech University</p>
                  <p className="text-muted-foreground">Graduated: 2022</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on software engineering, data structures, algorithms, and web development technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;