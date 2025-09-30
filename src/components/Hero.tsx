import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 "
      />
      <img style={{position:"absolute", transform:"translate(-50%, -50%)", zIndex:-10, width:"100%", top:"50%", left:"50%", opacity:"0.8" }} src="/bussiness.jpg" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span style={{ boxShadow: "1px 1px 1px 1px lightgray"}}  className=" text-black inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground/70 mb-4">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Creative Designer &
            <br />
            Developer
          </h1>
          
          <p className=" text-black text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Crafting beautiful, functional digital experiences with modern technologies
            and creative design thinking. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className=" text-black h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Linkedin className=" text-black h-6 w-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Mail className=" text-black h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-foreground/40" />
      </button>
    </section>
  );
};

export default Hero;
