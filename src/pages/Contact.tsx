import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Address",
      details: ["Aadhya Women's Degree College", "Hyderabad, Telangana", "India - 500001"],
    },
    {
      icon: <Phone className="w-8 h-8 text-secondary" />,
      title: "Phone",
      details: ["+91 40 1234 5678", "+91 40 8765 4321"],
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />,
      title: "Email",
      details: ["info@aadhyacollege.edu", "admissions@aadhyacollege.edu"],
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We're here to answer your questions and help you start your journey with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{info.icon}</div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">Send Us a Message</CardTitle>
                  <p className="text-center text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name</label>
                        <Input placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email Address</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone Number</label>
                        <Input placeholder="+91 1234567890" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Subject</label>
                        <Input placeholder="What is this regarding?" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button size="lg" className="w-full" variant="default">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Find Us Here</h2>
            <Card className="shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-muted h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      Interactive map would be embedded here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;