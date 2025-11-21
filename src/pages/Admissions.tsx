import { motion } from "framer-motion";
import { Calendar, FileText, CheckCircle2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import admission from "../assets/admission/admission.jpeg";
import admission1 from "../assets/admission/admission1.jpeg";
import registration from "../assets/admission/registration.jpeg";
import registration1 from "../assets/admission/registration1.jpeg";

const Admissions = () => {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Application",
      description: "Fill out the online application form with required details and upload documents",
    },
    {
      icon: <Users className="w-10 h-10 text-secondary" />,
      title: "Entrance Test",
      description: "Appear for entrance examination or merit-based selection as per the program",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-accent" />,
      title: "Selection",
      description: "Receive admission offer based on performance and merit list",
    },
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      title: "Enrollment",
      description: "Complete enrollment formalities and pay fees to confirm admission",
    },
  ];

  const requirements = [
    "Completed 10+2 or equivalent examination from recognized board",
    "Minimum 50% aggregate marks in qualifying examination",
    "Valid entrance test score (if applicable)",
    "Age criteria as per program requirements",
    "Original documents and certificates",
    "Recent passport-size photographs",
  ];

  const importantDates = [
    { event: "Application Opens", date: "March 1, 2024" },
    { event: "Application Deadline", date: "May 31, 2024" },
    { event: "Entrance Test", date: "June 15, 2024" },
    { event: "Merit List Announcement", date: "June 30, 2024" },
    { event: "Admission Process Begins", date: "July 1, 2024" },
    { event: "Classes Commence", date: "July 15, 2024" },
  ];

  const images = [
    { id: 1, src: admission, title: "Admission" },
    { id: 2, src: admission1, title: "Admission 1" },
    { id: 3, src: registration, title: "Registration" },
    { id: 4, src: registration1, title: "Registration 1" },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-white/90 mb-8">
              Begin your journey towards excellence. Join the Aadhya family today!
            </p>
            <Button size="lg" variant="secondary" className="shadow-elegant">
              Apply Online Now
            </Button>
          </motion.div>
        </div>
      </section>

{/* addmission imges */}
      <section className="pt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {images.map((eachItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, scale:1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                  <img src={eachItem.src} alt={eachItem.title} />
                </Card>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to secure your admission at Aadhya College
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{step.icon}</div>
                    <div className="mb-2 text-3xl font-bold text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Make sure you meet these requirements before applying
              </p>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{requirement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Important Dates</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mark your calendar with these key admission dates
              </p>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {importantDates.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-muted rounded-lg"
                      >
                        <span className="font-semibold text-lg">{item.event}</span>
                        <span className="text-primary font-bold">{item.date}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;