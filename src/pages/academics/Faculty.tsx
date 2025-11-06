import { motion } from "framer-motion";
import { Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Faculty = () => {
  const departments = [
    {
      name: "Arts & Humanities",
      faculty: 12,
      icon: <BookOpen className="w-8 h-8 text-primary" />,
    },
    {
      name: "Commerce & Management",
      faculty: 10,
      icon: <Users className="w-8 h-8 text-secondary" />,
    },
    {
      name: "Science & Technology",
      faculty: 15,
      icon: <Award className="w-8 h-8 text-accent" />,
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
            Our Faculty
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and dedicated faculty members committed to your academic excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                <CardHeader>
                  <div className="mb-4">{dept.icon}</div>
                  <CardTitle>{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">{dept.faculty}</p>
                  <p className="text-muted-foreground">Faculty Members</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Faculty Excellence</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Highly qualified faculty with PhDs and industry experience</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Regular faculty development programs and workshops</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Published research in national and international journals</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Student-centered teaching approach with mentorship programs</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Faculty;
