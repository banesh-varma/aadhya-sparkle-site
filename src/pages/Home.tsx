import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Megaphone, Activity, Globe2, Briefcase, HeartHandshake, Laptop, Building2, Microscope, Library } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnnouncementsBar from "@/components/AnnouncementsBar";
import book from "../assets/book.png"
import degree from "../assets/degree.png"

const Home = () => {
  // const features = [
  //   {
  //     icon: <GraduationCap className="w-12 h-12 text-primary" />,
  //     title: "Quality Education",
  //     description: "Comprehensive academic programs designed for women's empowerment",
  //   },
  //   {
  //     icon: <Users className="w-12 h-12 text-secondary" />,
  //     title: "Expert Faculty",
  //     description: "Learn from experienced educators dedicated to your success",
  //   },
  //   {
  //     icon: <BookOpen className="w-12 h-12 text-accent" />,
  //     title: "Modern Curriculum",
  //     description: "Updated courses aligned with industry standards and requirements",
  //   },
  //   {
  //     icon: <Award className="w-12 h-12 text-primary" />,
  //     title: "100% Placement",
  //     description: "Strong placement record with top companies and organizations",
  //   },
  // ];

  const features = [
  {
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    title: "Quality Education",
    description:
      "Our degree programs are designed with a strong academic foundation, blending theoretical knowledge with practical learning. We focus on empowering students through personalized teaching methods and a curriculum that nurtures confidence, critical thinking, and leadership qualities.",
  },
  {
    icon: <Users className="w-12 h-12 text-secondary" />,
    title: "Expert Faculty",
    description:
      "Our experienced and highly qualified faculty members bring years of academic and industry expertise. They provide mentorship, personalized guidance, and engaging teaching methods to ensure every student gains deep understanding and real-world skills.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-accent" />,
    title: "Modern Curriculum",
    description:
      "Our courses are regularly updated to match current industry demands and academic standards. Students learn through innovative teaching methods, updated study materials, and practical assignments that prepare them for future careers and higher studies.",
  },
  // {
  //   icon: <Award className="w-12 h-12 text-primary" />,
  //   title: "100% Placement",
  //   description:
  //     "We maintain strong relationships with leading companies and organizations. Our placement cell offers continuous training, interview preparation, and career support to help students secure jobs in reputed industries with excellent growth opportunities.",
  // },

  // Extra Features with Longer Descriptions
  {
    icon: <Library className="w-12 h-12 text-green-600" />,
    title: "Advanced Library",
    description:
      "Our digital and physical library provides access to thousands of books, research journals, e-learning materials, and online databases. The environment encourages self-study and research, supporting students in academic excellence and competitive exam preparation.",
  },
  // {
  //   icon: <Microscope className="w-12 h-12 text-purple-600" />,
  //   title: "Well-Equipped Labs",
  //   description:
  //     "Students gain hands-on experience through fully equipped laboratories with modern instruments and technology. Practical sessions are designed to strengthen conceptual understanding and develop problem-solving and analytical skills.",
  // },
  // {
  //   icon: <Building2 className="w-12 h-12 text-blue-500" />,
  //   title: "Modern Infrastructure",
  //   description:
  //     "Our campus offers well-designed classrooms, spacious seminar halls, dedicated study areas, and student-friendly facilities. A clean, well-maintained, and safe environment ensures a comfortable and productive academic experience.",
  // },
  // {
  //   icon: <Laptop className="w-12 h-12 text-orange-500" />,
  //   title: "E-Learning Support",
  //   description:
  //     "We integrate technology in education through digital classrooms, e-learning platforms, and LMS support. Students can access recorded lectures, study materials, and online assessments anytime, enhancing flexible and effective learning.",
  // },
  {
    icon: <HeartHandshake className="w-12 h-12 text-pink-600" />,
    title: "Student Support",
    description:
      "We offer continuous support through academic counseling, personal mentoring, and mental wellness assistance. Our approach ensures that students feel valued, confident, and motivated throughout their academic journey.",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-teal-600" />,
    title: "Career Guidance",
    description:
      "Our dedicated career guidance cell helps students discover their strengths, choose the right path, and prepare for future opportunities. Resume building, interview skills, competitive exam coaching, and career counseling are provided regularly.",
  },
  {
    icon: <Globe2 className="w-12 h-12 text-indigo-500" />,
    title: "Industry Connect",
    description:
      "We organize seminars, guest lectures, industrial visits, and internships to give students exposure to real-world work environments. These interactions help students understand industry expectations and enhance their career readiness.",
  },
  {
    icon: <Activity className="w-12 h-12 text-red-500" />,
    title: "Clubs & Activities",
    description:
      "Our college encourages holistic development through cultural events, sports competitions, NSS activities, and various student-led clubs. These platforms help students build confidence, creativity, teamwork, and leadership skills.",
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
      text:"Welcome to Aadhya College for Women"
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
            <div>
              <p className="underline text-orange-500 text-2xl mb-3">📚 WELCOME TO AADHYA JUNIOR & DEGREE COLLEGE FOR WOMEN</p>
              <h1  className=" text-4xl">Empowering Women, Shaping <span className="text-orange-500">Bright Future</span> Through Quality Education</h1>
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
                  <p className="text-gray-500"><span className="text-gray-600 font-bold">Aadhya Junior & degree College for Women</span>, we believe that <span className="text-gray-600 font-bold"> education is the key to unlocking the golden door of freedom.</span> Established with the vision of empowering women, we provide top-tier education, strong ethical values, and a foundation for future success. Within just a few years, Aadhya has grown into a renowned institution dedicated to shaping the minds of young women and preparing them for a dynamic world. Today, our college proudly caters to over 1,800 students, a testament to our unwavering commitment to academic excellence.</p>

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
                        <p className="font-bold">04024052054 / 9381484063 / 9951178206 / 9949139275</p>
                        <p className="bg-blue-300 p-1 rounded">Mail : aadhyadegree@gmail.com</p>
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
      <section
        className="py-20 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dsygwvdij/image/upload/DSC06794_n4kzbn.jpg')",
        }}
        >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

        <div className="container mx-auto px-4 relative z-10">
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
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>  
      </section>

        {/* Student Testimonials Section */}
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
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from students who grew, succeeded, and transformed at Aadhya
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sravani – B.Com (CA)",
                text: "Aadhya College helped me discover my strengths. The teachers supported me at every step and boosted my confidence.",
                image: "https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_02_2025_-_9_51PM_pbofj9.png",
              },
              {
                name: "Meghana – B.Sc (CS)",
                text: "The campus environment is safe and encouraging. I improved my communication, technical skills, and overall personality.",
                image: "https://res.cloudinary.com/dsygwvdij/image/upload/ChatGPT_Image_Jul_15_2025_11_34_29_AM_qomukj.png",
              },
              {
                name: "Haritha – B.A English",
                text: "From cultural activities to seminars, every experience helped me grow. The college truly shapes confident young women.",
                image: "https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_02_2025_-_9_51PM_pbofj9.png",
              },
              {
                name: "Anusha – BBA",
                text: "The practical teaching, presentations, and training sessions improved my leadership and management skills.",
                image: "https://res.cloudinary.com/dsygwvdij/image/upload/ChatGPT_Image_Jul_15_2025_11_34_29_AM_qomukj.png",
              },
              {
                name: "Keerthi – BCA",
                text: "The computer labs, workshops, and projects helped me build real IT knowledge. Today, I feel industry-ready.",
                image: "https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_02_2025_-_9_51PM_pbofj9.png",
              },
              {
                name: "Navya – B.Sc (DS)",
                text: "Aadhya offers the best mix of academics and personality development. I gained confidence, discipline, and career direction.",
                image: "https://res.cloudinary.com/dsygwvdij/image/upload/ChatGPT_Image_Jul_15_2025_11_34_29_AM_qomukj.png",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                  
                  {/* Student Image */}
                  <div className="flex justify-center pt-6">
                    <img
                      src={review.image}
                      className="w-20 h-20 rounded-full object-cover border-4 border-orange-400 shadow-lg"
                      alt={review.name}
                    />
                  </div>

                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                      “{review.text}”
                    </p>
                    <p className="font-semibold text-foreground">{review.name}</p>
                  </CardContent>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Recruiters / Hiring Partners */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">

        {/* Stunning Background Effects */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-orange-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/20 blur-[120px] rounded-full"></div>

        {/* ANIMATION CSS */}
        <style>
          {`
            @keyframes slideLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }

            @keyframes slideRight {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(0); }
            }

            .slider {
              display: flex;
              white-space: nowrap;
              width: max-content;
            }

            .slide-left {
              animation: slideLeft 25s linear infinite;
            }

            .slide-right {
              animation: slideRight 25s linear infinite;
            }

            .slide-left:hover,
            .slide-right:hover {
              animation-play-state: paused;
            }

            /* Logo Card Hover Effects */
            .recruiter-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              backdrop-filter: blur(10px);
            }

            .recruiter-card:hover {
              transform: translateY(-6px) scale(1.05);
              box-shadow: 0 8px 40px rgba(255, 123, 0, 0.3);
            }
          `}
        </style>

        {/* Heading */}
        <div className="container mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-5xl font-extrabold text-foreground drop-shadow-sm">
            Our Recruiters
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Top companies that visited our campus for placements, internships, and interviews.
          </p>
        </div>

        {/* FIRST ROW (LEFT → RIGHT) */}
        <div className="overflow-hidden mb-10 relative z-10 p-5">
          <div className="slider slide-left gap-10">
            {[
              "Infosys", "TCS", "Wipro", "Amazon", "HCL",
              "Tech Mahindra", "Accenture", "Genpact", "Dell", "Cognizant"
            ].map((company, index) => (
              <div
                key={index}
                className="
                  recruiter-card mx-4 px-6 py-4 
                  bg-white/30 border border-white/40 
                  shadow-lg rounded-xl backdrop-blur-xl 
                  flex items-center gap-3
                "
              >
                <span className="h-2 w-2 bg-primary rounded-full"></span>
                <p className="font-semibold text-foreground">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECOND ROW (RIGHT → LEFT) */}
        <div className="overflow-hidden relative z-10 p-5">
          <div className="slider slide-right gap-10">
            {[
              "Capgemini", "IBM", "Mindtree", "Oracle", "Google",
              "SAP", "Byju's", "Flipkart", "Deloitte", "Zoho"
            ].map((company, index) => (
              <div
                key={index}
                className="
                  recruiter-card mx-4 px-6 py-4 
                  bg-white/30 border border-white/40 
                  shadow-lg rounded-xl backdrop-blur-xl 
                  flex items-center gap-3
                "
              >
                <span className="h-2 w-2 bg-primary rounded-full"></span>
                <p className="font-semibold text-foreground">{company}</p>
              </div>
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

{/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center max-w-3xl mx-auto"
          >
            <p className="text-orange-500 text-xl font-semibold underline decoration-orange-300">
              📚 Welcome to Ideal College for Women
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
              Empowering Women to Create a{" "}
              <span className="text-orange-500">Brighter Future</span>
            </h1>
          </motion.div>

          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  className="rounded-[70px] rounded-bl-none shadow-md object-cover"
                  src="https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_15_2025_-_9_46AM_svicsu.png"
                />
                <div className="flex items-center justify-between bg-orange-500 text-white p-3 rounded-[70px] rounded-br-none shadow-lg">
                  <div className="bg-white p-4 rounded-full">
                    <img
                      className="w-12"
                      src="https://www.idealedu.in/assets/img/icon/exchange-idea.svg"
                    />
                  </div>
                  <p className="font-bold text-sm md:text-base">
                    30 Years of Academic Excellence
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <img
                  className="rounded-r-full border-2 border-dashed border-orange-400 p-2 object-cover shadow-sm"
                  src="https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_15_2025_-_9_48AM_ex0dyf.png"
                />
                <img
                  className="rounded-[70px] rounded-tl-none shadow-md object-cover"
                  src="https://res.cloudinary.com/dsygwvdij/image/upload/Generated_Image_November_15_2025_-_9_49AM_g0dcib.png"
                />
              </div>
            </div>

            
            <div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                <span className="font-bold text-gray-800">Ideal College for Women</span>{" "}
                stands as a symbol of educational excellence and women’s empowerment.
                Guided by strong values, we aim to provide a learning environment that
                builds character, confidence, and competence. With over{" "}
                <span className="font-semibold">1,800 active learners</span>, our
                institution continues to shape dedicated and future-ready young women.
              </p>

              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">

                <div className="flex gap-4 items-start">
                  <div className="relative w-20 h-20">
                    <div className="absolute w-full h-full bg-gray-200 rounded-full opacity-40 -left-2 -bottom-2" />
                    <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center p-3 shadow-md">
                      <img src={book} className="w-10" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Holistic Learning</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We focus on overall personality development through academics,
                      leadership, and skill-building.
                    </p>
                  </div>
                </div>

                
                <div className="flex gap-4 items-start">
                  <div className="relative w-20 h-20">
                    <div className="absolute w-full h-full bg-gray-200 rounded-full opacity-40 -left-2 -bottom-2" />
                    <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center p-3 shadow-md">
                      <img src={degree} className="w-10" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Career-Focused Training</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Practical exposure, mentorship, and industry-oriented programs
                      prepare students for brighter career pathways.
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="bg-orange-100 p-5 rounded-2xl shadow-sm mb-8">
                <p className="italic text-gray-800 text-md">
                  “Education is not just about learning; it is about transforming
                  lives, inspiring change, and empowering women to lead with
                  confidence.”
                </p>
              </div>

              
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-orange-500 text-white px-10 py-3 rounded-xl rounded-bl-none font-semibold hover:bg-orange-600 shadow-md transition">
                  More...
                </button>
                <div>
                  <p className="text-orange-500 font-semibold">Call Now</p>
                  <p className="text-gray-700">
                    040-24150022 / 24150222 / 8886673460
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-md hover:shadow-xl transition rounded-2xl">
                  <CardHeader>
                    <div className="mb-3 text-orange-500">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}