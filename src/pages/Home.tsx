import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnnouncementsBar from "@/components/AnnouncementsBar";
import book from "../assets/book.png"
import degree from "../assets/degree.png"

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Quality Education",
      description: "Comprehensive academic programs designed for women's empowerment",
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Expert Faculty",
      description: "Learn from experienced educators dedicated to your success",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "Modern Curriculum",
      description: "Updated courses aligned with industry standards and requirements",
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "100% Placement",
      description: "Strong placement record with top companies and organizations",
    },
  ];

  const Announcements = [
    {
      text:"The Final Year result is now Available"
    },
    {
      text:"Important Announcement for 2 year Students"
    },
    {
      text:"Welcome to IDEAL College for Women"
    },
    {
      text:"Empowering Women, Shaping Brighter Future Through Quality Education"
    },
    {
      text:"We foster leadership, confidence, and real-world skills"
    },
    {
      text:"Important Announcement for 2 year Students"
    },
    {
      text:"The Final Year result is now Available"
    },
    {
      text:"Important Announcement for 2 year Students"
    }
]


  const stats = [
    { number: "2500+", label: "Students" },
    { number: "50+", label: "Faculty Members" },
    { number: "15+", label: "Courses" },
    { number: "95%", label: "Placement Rate" },
  ];

  return (
    <div className="min-h-screen">
      <AnnouncementsBar />
      <HeroCarousel />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=""
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-5">
          <div className="relative rounded-2xl overflow-hidden bg-white p-5 shadow-lg m-5">
            {/* Heading stays fixed */}
            <h1 className="text-4xl font-bold text-orange-400 mb-4">
              News & Announcements
            </h1>

            {/* Scrollable area */}
            <div className="relative h-48 overflow-hidden">
              <ul className="animate-scroll-up space-y-3">
                {/* Duplicate list for continuous scroll */}
                {Announcements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-black">
                    <Megaphone className="text-orange-400 mt-1" />
                    <p className="border-orange-200 border-b-2 ">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline CSS animation */}
            <style>
              {`
                @keyframes scroll-up {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }

                .animate-scroll-up {
                  animation: scroll-up 15s linear infinite;
                }

                .animate-scroll-up:hover {
                  animation-play-state: paused;
                }
              `}
            </style>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-white w-120 p-5 shadow-lg m-5">
            {/* Heading stays fixed */}
            <h1 className="text-4xl font-bold text-orange-400 mb-4">
              Exams & Holidays Details 
            </h1>

            {/* Scrollable area */}
            <div className="relative h-48 overflow-hidden">
              <ul className="animate-scroll-up space-y-3">
                {/* Duplicate list for continuous scroll */}
                {Announcements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-black">
                    <Megaphone className="text-orange-400 mt-1" />
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline CSS animation */}
            <style>
              {`
                @keyframes scroll-up {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }

                .animate-scroll-up {
                  animation: scroll-up 15s linear infinite;
                }

                .animate-scroll-up:hover {
                  animation-play-state: paused;
                }
              `}
            </style>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" mb-12"
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Aadhya?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in education with a focus on women's empowerment and holistic development
            </p> */}
            <div>
              <p className="underline text-orange-500 text-2xl mb-3">📚 WELCOME TO IDEAL COLLEGE FOR WOMEN</p>
              <h1  className=" text-4xl">Empowering Women, Shaping <span className="text-orange-500">Brighter Future</span> Through Quality Education</h1>
              <div className="grid lg:grid-cols-2">
                <div className="m-5 grid md:grid-cols-2">
                  <div className="">
                      <img className="rounded-[100px] rounded-bl-none mb-2" src="https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_15_2025_-_9_46AM_svicsu.png" />
                    <div className="flex justify-between items-center rounded-[100px] rounded-br-none bg-orange-400 p-2 mb-2">
                      <div className="bg-white rounded-full p-4">
                        <img className="w-12" src="https://www.idealedu.in/assets/img/icon/exchange-idea.svg" />
                      </div>
                      <p className="text-white font-bold lg:text-sm">30 Years Of Quality Service</p>
                    </div>
                  </div>

                  <div className="m-5">
                    <img className="mb-2 rounded-r-full border-orange-400 border-2 border-dashed p-2" src="https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_15_2025_-_9_48AM_ex0dyf.png" />
                    <img className="rounded-[100px] rounded-tl-none" src="https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_15_2025_-_9_49AM_g0dcib.png" />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-gray-500"><span className="text-gray-600 font-bold">Ideal College for Women</span>, we believe that <span className="text-gray-600 font-bold"> education is the key to unlocking the golden door of freedom.</span> Established with the vision of empowering women, we provide top-tier education, strong ethical values, and a foundation for future success. Within just a few years, Ideal has grown into a renowned institution dedicated to shaping the minds of young women and preparing them for a dynamic world. Today, our college proudly caters to over 1,800 students, a testament to our unwavering commitment to academic excellence.</p>

                    <div className="grid md:grid-cols-2">
                      <div className="flex items-center gap-4 m-5">
                        <div className="relative w-24 h-24 shrink-0">
                          <div className="absolute w-24 h-24 rounded-full bg-gray-200 opacity-50 -left-4 -bottom-3"></div>
                          <div className="absolute inset-0 rounded-full bg-orange-400 flex items-center justify-center p-3">
                            <img src={book} alt="icon" className="w-12" />
                          </div>
                        </div>
                        <div className="shrink-1">
                          <h1 className="font-semibold text-lg">Beyond Academics</h1>
                          <p className="text-gray-600 max-w-[250px]">
                            We foster leadership, confidence, and real-world skills through complete learning.
                          </p>
                        </div>
                      </div> 
                      <div className="flex items-center gap-4 m-5">
                        <div className="relative w-24 h-24 shrink-0">
                          <div className="absolute w-24 h-24 rounded-full bg-gray-200 opacity-50 -left-4 -bottom-3"></div>
                          <div className="absolute inset-0 rounded-full bg-orange-400 flex items-center justify-center p-3">
                            <img src={degree} alt="icon" className="w-12" />
                          </div>
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">Beyond Academics</h1>
                          <p className="text-gray-600 max-w-[250px]">
                            We foster leadership, confidence, and real-world skills through complete learning.
                          </p>
                        </div>
                      </div> 
                    </div>

                    <div className="bg-orange-100/40 p-5 rounded-2xl">
                      <div>
                        <p className="text-md">"Education is not just about learning; it's about transforming lives, shaping futures and empowering women to lead with confidence."</p>
                        {/* <p className="text-black font-bold text-lg">â€“ [Sri. N Seeta Ram Reddy]</p> */}
                      </div>
                    </div>

                    <div className="flex gap-5 mt-5">
                      <button className="bg-orange-400 rounded-xl rounded-bl-none hover:bg-orange-500 text-white px-10 font-bold">More...</button>
                      <div>
                        <p className="text-orange-500">Call Now</p>
                        <p>040-24150022 / 24150222 / 8886673460</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of women who have transformed their lives through education at Aadhya College
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/admissions">
                <Button size="lg" variant="default" className="shadow-elegant">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="secondary">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;



// https://res.cloudinary.com/dsygwvdij/image/upload/DSC06794_n4kzbn.jpg