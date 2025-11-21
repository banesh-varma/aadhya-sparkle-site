import { motion } from "framer-motion";
import { BookOpen, Clock, IndianRupee, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import aadhya_ba from "../assets/courses/aadhya_ba.png";
import aadhya_bcom from "../assets/courses/aadhya_bcom.jpg";
import aadhya_bsc from "../assets/courses/aadhya_bsc.jpg";
import aadhya_bba from "../assets/courses/aadhya_bba.png";
import aadhya_bca from "../assets/courses/aadhya_bca.png";


const Courses = () => {
  const courses = [
    {
      name: "Bachelor of Arts (B.A.)",
      duration: "3 Years",
      fee: "₹30,000/year",
      specializations: ["English", "History", "Political Science", "Economics", "Psychology"],
      description: "Comprehensive liberal arts education with diverse specialization options",
      image: aadhya_ba
    },
    {
      name: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      fee: "₹35,000/year",
      specializations: ["General", "Computer Applications", "Accounting & Finance"],
      description: "Develop business acumen and accounting expertise for corporate careers",
      image: aadhya_bcom
    },
    {
      name: "Bachelor of Science (B.Sc.)",
      duration: "3 Years",
      fee: "₹40,000/year",
      specializations: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Biotechnology"],
      description: "Strong foundation in sciences with laboratory and research facilities",
      image: aadhya_bsc
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fee: "₹45,000/year",
      specializations: ["General Management", "Marketing", "Human Resources", "Finance"],
      description: "Industry-oriented program preparing students for management roles",
      image: aadhya_bba
    },
    {
      name: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      fee: "₹50,000/year",
      specializations: ["Software Development", "Data Science", "Web Technologies"],
      description: "Comprehensive IT education with focus on programming and applications",
      image: aadhya_bca
    },
  ];

  const facilities = [
    "Well-equipped Libraries",
    "Computer Labs with Latest Software",
    "Science Laboratories",
    "Digital Classrooms",
    "Sports & Recreation",
    "Career Counseling",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-white/90">
              Explore diverse undergraduate programs designed to prepare you for successful careers
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
                        <CardTitle className="text-2xl md:text-3xl mb-2">{course.name}</CardTitle>
                        <CardDescription className="text-base">{course.description}</CardDescription>
                      </div>
                      {/* <Button variant="secondary">Apply Now</Button> */}
                    </div>
                  </CardHeader>
                  <div className="grid md:grid-cols-2">
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-semibold">{course.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">Specializations</p>
                            <p className="font-semibold">{course.specializations.length}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-3">Specialization Options:</p>
                        <div className="flex flex-wrap gap-2">
                          {course.specializations.map((spec, i) => (
                            <span
                              key={i}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <div className="md:flex justify-center mb-6 hidden lg:visible ">
                      <img className="w-80 shadow-lg hover:scale-105 transition-all duration-500" src={course.image} alt="" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
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
              World-Class Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our campus provides everything you need for a comprehensive educational experience
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

export default Courses;