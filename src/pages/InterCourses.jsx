import { motion } from "framer-motion";
import { BookOpen, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import mpc_img from "../assets/courses/inter/mpc.png";
import bipc_img from "../assets/courses/inter/bipc.png";
import mec_img from "../assets/courses/inter/mec.png";
import cec_img from "../assets/courses/inter/cec.png";


const InterCourses = () => {
  const courses = [
    {
      name: "MPC",
      duration: "2 Years (Intermediate)",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      description: "Ideal for students aspiring for Engineering and Technical careers.",
      image: mpc_img
    },
    {
      name: "BiPC",
      duration: "2 Years (Intermediate)",
      subjects: ["Biology", "Physics", "Chemistry"],
      description: "Best suited for Medical, Pharmacy and Life Science fields.",
      image: bipc_img
    },
    {
      name: "MEC",
      duration: "2 Years (Intermediate)",
      subjects: ["Mathematics", "Economics", "Commerce"],
      description: "Strong foundation for Business, Finance and Management careers.",
      image: mec_img
    },
    {
      name: "CEC",
      duration: "2 Years (Intermediate)",
      subjects: ["Civics", "Economics", "Commerce"],
      description: "Suitable for Law, Civil Services and Commerce-related careers.",
      image: cec_img
    },
  ];

  const facilities = [
    "Experienced Faculty",
    "Well-equipped Laboratories",
    "Digital Classrooms",
    "Library & Study Resources",
    "Career Guidance",
    "Sports & Extracurricular Activities",
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="gradient-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Intermediate Courses
            </h1>
            <p className="text-xl text-white/90">
              Two-year academic programs designed for strong foundational learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-6xl mx-auto">

            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth">

                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl mb-2">
                          {course.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {course.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <div className="grid md:grid-cols-2">

                    <CardContent>

                      {/* Duration & Subject Count */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">

                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Duration
                            </p>
                            <p className="font-semibold">
                              {course.duration}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Core Subjects
                            </p>
                            <p className="font-semibold">
                              {course.subjects.length}
                            </p>
                          </div>
                        </div>

                      </div>

                      {/* Subjects List */}
                      <div>
                        <p className="font-semibold mb-3">
                          Subject Combination:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {course.subjects.map((subject, i) => (
                            <span
                              key={i}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                    </CardContent>

                    {/* Image */}
                    <div className="md:flex justify-center mb-6 hidden lg:visible">
                      <img
                        className="w-80 shadow-lg hover:scale-105 transition-all duration-500"
                        src={course.image}
                        alt={course.name}
                      />
                    </div>

                  </div>

                </Card>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Facilities Section */}
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
              Facilities for Intermediate Students
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A supportive academic environment to help students excel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-card"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{facility}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default InterCourses;