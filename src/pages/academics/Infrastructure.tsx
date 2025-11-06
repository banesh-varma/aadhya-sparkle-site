import { motion } from "framer-motion";
import { Building2, Library, FlaskConical, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Infrastructure = () => {
  const facilities = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Modern Classrooms",
      description: "Air-conditioned classrooms with smart boards and modern amenities",
    },
    {
      icon: <Library className="w-12 h-12 text-secondary" />,
      title: "Digital Library",
      description: "Extensive collection of books, journals, and digital resources",
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-accent" />,
      title: "Science Labs",
      description: "Well-equipped laboratories for practical learning",
    },
    {
      icon: <Laptop className="w-12 h-12 text-primary" />,
      title: "Computer Center",
      description: "State-of-the-art computer labs with high-speed internet",
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
            Infrastructure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class facilities designed to enhance your learning experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                <CardHeader>
                  <div className="mb-4">{facility.icon}</div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Additional Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Campus Amenities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cafeteria with nutritious meals</li>
                <li>• Sports facilities and gymnasium</li>
                <li>• Auditorium for events</li>
                <li>• Medical room with first aid</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Student Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Counseling center</li>
                <li>• Career guidance cell</li>
                <li>• Hostel facilities</li>
                <li>• Transportation services</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Infrastructure;
