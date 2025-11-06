import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Quality Education",
      description: "Comprehensive academic programs designed for women's empowerment",
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Expert Faculty",
      description: "Learn from experienced educators dedicated to your success",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "Modern Curriculum",
      description: "Updated courses aligned with industry standards and requirements",
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "100% Placement",
      description: "Strong placement record with top companies and organizations",
    },
  ];

  const stats = [
    { number: "2500+", label: "Students" },
    { number: "50+", label: "Faculty Members" },
    { number: "15+", label: "Courses" },
    { number: "95%", label: "Placement Rate" },
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Aadhya?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in education with a focus on women's empowerment and holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of women who have transformed their lives through education at Aadhya College
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/admissions">
                <Button size="lg" variant="default" className="shadow-elegant">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="secondary">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;