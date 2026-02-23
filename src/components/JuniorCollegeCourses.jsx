import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";

const JuniorCollegeCourses = () => {
  const courses = [
    {
      name: "MPC",
      duration: "2 Years (Intermediate)",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      description: "Ideal for students aiming for Engineering and Technical careers."
    },
    {
      name: "BiPC",
      duration: "2 Years (Intermediate)",
      subjects: ["Biology", "Physics", "Chemistry"],
      description: "Best choice for Medical, Pharmacy and Life Science fields."
    },
    {
      name: "MEC",
      duration: "2 Years (Intermediate)",
      subjects: ["Mathematics", "Economics", "Commerce"],
      description: "Strong foundation for Business, Finance and Management careers."
    },
    {
      name: "CEC",
      duration: "2 Years (Intermediate)",
      subjects: ["Civics", "Economics", "Commerce"],
      description: "Suitable for Law, Civil Services and Commerce-related careers."
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Junior College Programmes</h2>
          <p className="text-muted-foreground text-lg">
            Two-year Intermediate Programmes designed for academic excellence
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {course.name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Duration */}
                  <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-center mb-4">
                    {course.description}
                  </p>

                  {/* Subjects */}
                  <div>
                    <p className="font-semibold mb-2 text-sm text-center">
                      Core Subjects
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {course.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
                      <div className="text-center mt-22">
                        <Link to="/courses">
                            <Button size="lg" className="px-8">
                            View All Courses
                            </Button>
                        </Link>
                    </div>
      </div>
    </section>
  );
};

export default JuniorCollegeCourses;
