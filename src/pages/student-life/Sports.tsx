import { motion } from "framer-motion";
import { Trophy, Medal, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sports = () => {
  const facilities = [
    "Indoor Badminton Court",
    "Table Tennis",
    "Chess",
    "Carrom",
    "Yoga & Fitness Center",
    "Outdoor Sports Ground",
    "Athletics Track",
    "Basketball Court",
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "University Champions",
      count: "15+",
      description: "Championships won in various sports",
    },
    {
      icon: <Medal className="w-12 h-12 text-secondary" />,
      title: "State Level",
      count: "50+",
      description: "Students participated in state competitions",
    },
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: "National Level",
      count: "10+",
      description: "Representations in national tournaments",
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
            Sports & Fitness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay active and healthy with our excellent sports facilities and programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-smooth h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">{achievement.count}</p>
                  <p className="text-muted-foreground">{achievement.description}</p>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Sports Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <span className="text-primary">✓</span>
                <span>{facility}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sports;
