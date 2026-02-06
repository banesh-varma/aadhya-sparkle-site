import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  // Validation state
  const [errors, setErrors] = useState<any>({});

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let tempErrors: any = {};

    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) tempErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      tempErrors.email = "Invalid email format";

    if (!form.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      tempErrors.phone = "Phone must be 10 digits";

    if (!form.subject.trim()) tempErrors.subject = "Subject is required";

    if (!form.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz5SspJhdVbuB3A2EaqpUfTzO__rIWXVFFAmllhq-6TB9w0cGsRQpyt72aXdIdS_ZCC/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      alert("✅ Message sent successfully!");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Failed to send message.");
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Address",
      details: ["Aadhya Women's Degree College", "Metro pillar No: 1515, Vijaya Diagnostic Center, Dilsukhnagar, Hyderabad, Telangana", "India - 500001"],
    },
    {
      icon: <Phone className="w-8 h-8 text-secondary" />,
      title: "Phone",
      details: ["04024052054 / 9381484063 / 9951178206 / 9949139275"],
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />,
      title: "Email",
      details: ["aadhyadegree@gmail.com"],
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 5:00 PM"],
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
          
          <div className="px-5 bg-gradient-to-br from-[#F8F9FB] via-[#E6F2FA] to-[#FFF1D6] py-10">

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto ">
            {/* NAME */}
            <div>
                <label className="font-medium">Full Name</label>
              <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* PHONE */}
              <div>
                <label className="font-medium">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* SUBJECT */}
              <div>
                <label className="font-medium">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="font-medium">Message</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="min-h-[150px]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
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
            {/* <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Find Us Here</h2> */}
            <Card className="shadow-card overflow-hidden">
              <CardContent className="pb-10">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-primary mb-8">Contact Us</h2>
                  <p className="text-gray-700 mb-4">Aadhya Women's Degree College, Dilsukhnagar, Hyderabad</p>
                  <p className="text-gray-600 mb-6">📞 +91 9949139275 | ✉️ aadhyadegree@gmail.com</p>
                  {/* <iframe
                      title="map"
                      src="https://www.google.com/maps?q=dilsukhnagar%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-64 rounded-xl border-0"
                  ></iframe> */}
                  <iframe
                    title="Hyderabad Degree College Location"
                    src="https://www.google.com/maps?q=17.3699226,78.5200556&z=17&output=embed"
                    className="w-full h-64 rounded-xl border-0"
                    loading="lazy"
                  ></iframe>

                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

        {/* <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Contact Us</h2>
          <p className="text-gray-700 mb-4">Hyderabad Degree College, Dilsukhnagar, Hyderabad</p>
          <p className="text-gray-600 mb-6">📞 +91 98765 43210 | ✉️ info@hyderabadcollege.edu.in</p>
          <iframe
              title="map"
              src="https://www.google.com/maps?q=dilsukhnagar%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-xl border-0"
          ></iframe>
        </div>     */}
    </div>
  );
};

export default Contact;

