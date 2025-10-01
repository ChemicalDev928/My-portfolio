import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards.",
    },
    {
      icon: Palette,
      title: "Design First",
      description: "Creating intuitive, beautiful interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                I'm a creative developer with a passion for building beautiful, functional web
                applications. With years of experience in both design and development, I bridge
                the gap between aesthetics and functionality.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                My approach combines modern technologies with timeless design principles to
                create experiences that are not only visually stunning but also intuitive and
                performant.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                From concept to deployment, I handle every aspect of web development. Whether
                it's a sleek landing page, a complex web application, or anything in between,
                I bring ideas to life with code.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I specialize in React, TypeScript, and modern web technologies, always staying
                current with industry trends and best practices.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
