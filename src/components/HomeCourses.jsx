import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeCourses = () => {
  const courses = [
    {
      name: "B.A.",
      duration: "3 Years",
      subjects: ["English", "Political Science", "Economics"],
      description: "Comprehensive liberal arts education."
    },
    {
      name: "B.Com",
      duration: "3 Years",
      subjects: ["Accounting", "Finance", "Computer Applications"],
      description: "Develop business and financial expertise."
    },
    {
      name: "B.Sc.",
      duration: "3 Years",
      subjects: ["Mathematics", "Physics", "Computer Science"],
      description: "Strong scientific and analytical foundation."
    },
    {
      name: "BBA",
      duration: "3 Years",
      subjects: ["Marketing", "HR", "Finance"],
      description: "Industry-oriented management program."
    },
    {
        name: "BCA",
        duration: "3 Years",
        fee: "₹50,000 / year",
        subjects: ["Programming", "Data Science", "Web Development"],
        description: "Comprehensive IT program focused on software development and modern technologies."
        }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Undergraduate Programmes</h2>
          <p className="text-muted-foreground text-lg">
            Explore our career-focused degree Programmes
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
                    <p className="font-semibold text-sm text-center mb-2">
                      Specializations
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

        {/* View All Button */}
        <div className="text-center mt-12">
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

export default HomeCourses;
