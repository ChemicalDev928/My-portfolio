import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team features, and analytics.",
      tags: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations and optimized performance.",
      tags: ["React", "Framer Motion", "Vite", "CSS"],
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with forecasts, interactive maps, and location-based services.",
      tags: ["React", "API Integration", "Charts", "Geolocation"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    },
    {
      title: "Social Media App",
      description:
        "Feature-rich social media platform with posts, comments, likes, and user profiles.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    },
    {
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking app with workout logs, progress charts, and goal setting.",
      tags: ["React Native", "TypeScript", "Charts", "Firebase"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A selection of my recent work showcasing various skills and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up border-border group bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="shadow-lg bg-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-xs rounded-full text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
