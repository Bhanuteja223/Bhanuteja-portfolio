import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and integrated payment processing. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
      image: "🛒",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with modern web technologies.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      image: "📋",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application with location-based forecasts, historical data visualization, and responsive design for all devices.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3", "Local Storage"],
      image: "🌤️",
      category: "Frontend"
    },
    {
      title: "API Gateway Service",
      description: "A microservices API gateway with authentication, rate limiting, and monitoring capabilities. Built for scalability and high performance.",
      technologies: ["Node.js", "Express", "Redis", "Docker", "JWT", "Winston"],
      image: "🔗",
      category: "Backend"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with real-time data processing and beautiful data visualizations.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "WebSockets"],
      image: "📊",
      category: "Full Stack"
    }
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Featured Projects
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Here are some of the projects I've worked on, showcasing my skills in full-stack development, modern frameworks, and clean code practices.
            </p>

            {/* Filter Buttons */}
            <div className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className="hover:scale-105 transition-all duration-300"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`group bg-project-card hover:shadow-portfolio-heavy transition-all duration-500 hover:scale-105 border-0 shadow-portfolio-medium overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-portfolio-medium"
              size="lg"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;