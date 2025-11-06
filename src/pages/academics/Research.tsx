import { motion } from "framer-motion";
import { Microscope, FileText, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  const highlights = [
    {
      icon: <Microscope className="w-12 h-12 text-primary" />,
      title: "Active Research Projects",
      count: "25+",
      description: "Ongoing research initiatives across departments",
    },
    {
      icon: <FileText className="w-12 h-12 text-secondary" />,
      title: "Publications",
      count: "100+",
      description: "Research papers in national and international journals",
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Research Grants",
      count: "₹50L+",
      description: "Funding received for research projects",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research & Innovation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fostering a culture of research and innovation among students and faculty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-smooth h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">{highlight.count}</p>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Science & Technology</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Biotechnology and Genetics</li>
                  <li>• Environmental Science</li>
                  <li>• Data Science and AI</li>
                  <li>• Chemistry and Material Science</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Social Sciences</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Women's Studies</li>
                  <li>• Economics and Development</li>
                  <li>• Psychology and Counseling</li>
                  <li>• Education and Pedagogy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Student Research</h2>
            <p className="text-muted-foreground mb-4">
              We encourage undergraduate students to participate in research activities through:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Summer research internships</li>
              <li>• Research paper writing workshops</li>
              <li>• Student research symposiums</li>
              <li>• Collaboration with industry and research institutions</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
