import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Mission",
      description: "To provide quality education and create empowered women leaders who contribute positively to society.",
    },
    {
      icon: <Eye className="w-10 h-10 text-secondary" />,
      title: "Vision",
      description: "To be a center of excellence in women's education, fostering innovation, leadership, and social responsibility.",
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Values",
      description: "Integrity, Excellence, Empowerment, Innovation, and Inclusivity guide everything we do.",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Recognition",
      description: "Accredited by leading educational bodies and recognized for our commitment to quality education.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Aadhya</h1>
            <p className="text-xl text-white/90">
              A premier institution dedicated to empowering women through quality education since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Aadhya Women's Degree College was established in 2010 with a vision to provide quality higher education exclusively for women. Located in the heart of Hyderabad, our institution has grown to become a beacon of excellence in women's education.
                </p>
                <p>
                  We believe that education is the most powerful tool for women's empowerment. Our comprehensive academic programs, combined with co-curricular activities and personality development initiatives, prepare students to excel in their chosen careers and become responsible citizens.
                </p>
                <p>
                  With state-of-the-art infrastructure, experienced faculty, and a nurturing environment, we ensure that every student receives personalized attention and opportunities to discover their potential. Our strong industry connections and placement assistance have helped thousands of students build successful careers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles drive our commitment to excellence in women's education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                  <CardHeader>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;