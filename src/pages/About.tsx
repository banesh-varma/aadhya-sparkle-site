// import { motion } from "framer-motion";
// import { Target, Eye, Heart, Award } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const About = () => {
//   const values = [
//     {
//       icon: <Target className="w-10 h-10 text-primary" />,
//       title: "Mission",
//       description: "To provide quality education and create empowered women leaders who contribute positively to society.",
//     },
//     {
//       icon: <Eye className="w-10 h-10 text-secondary" />,
//       title: "Vision",
//       description: "To be a center of excellence in women's education, fostering innovation, leadership, and social responsibility.",
//     },
//     {
//       icon: <Heart className="w-10 h-10 text-accent" />,
//       title: "Values",
//       description: "Integrity, Excellence, Empowerment, Innovation, and Inclusivity guide everything we do.",
//     },
//     {
//       icon: <Award className="w-10 h-10 text-primary" />,
//       title: "Recognition",
//       description: "Accredited by leading educational bodies and recognized for our commitment to quality education.",
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="gradient-primary py-20 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">About Aadhya</h1>
//             <p className="text-xl text-white/90">
//               A premier institution dedicated to empowering women through quality education since 2010
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
//               <div className="space-y-4 text-lg text-muted-foreground">
//                 <p>
//                   Aadhya Women's Degree College was established in 2010 with a vision to provide quality higher education exclusively for women. Located in the heart of Hyderabad, our institution has grown to become a beacon of excellence in women's education.
//                 </p>
//                 <p>
//                   We believe that education is the most powerful tool for women's empowerment. Our comprehensive academic programs, combined with co-curricular activities and personality development initiatives, prepare students to excel in their chosen careers and become responsible citizens.
//                 </p>
//                 <p>
//                   With state-of-the-art infrastructure, experienced faculty, and a nurturing environment, we ensure that every student receives personalized attention and opportunities to discover their potential. Our strong industry connections and placement assistance have helped thousands of students build successful careers.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission, Vision & Values */}
//       <section className="py-20 bg-muted">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//               Our Guiding Principles
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               These core principles drive our commitment to excellence in women's education
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
//                   <CardHeader>
//                     <div className="mb-4">{value.icon}</div>
//                     <CardTitle className="text-2xl">{value.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground text-lg">{value.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;



import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Mission",
      description:
        "To provide inclusive, high-quality education that nurtures intellectual strength, ethical values, confidence, and leadership in young women, enabling them to become professionally competent and socially responsible individuals.",
    },
    {
      icon: <Eye className="w-10 h-10 text-secondary" />,
      title: "Vision",
      description:
        "To become a premier institution for women’s education, recognized for excellence in academics, innovation, research, and character-building, while creating future leaders who can shape a progressive and empowered society.",
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Values",
      description:
        "Integrity, Excellence, Empowerment, Innovation, and Inclusivity are the guiding pillars that define our academic culture and student development approach.",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Recognition",
      description:
        "Recognized for our strong academic frameworks, value-driven environment, and student-centric teaching methods that contribute significantly to women’s empowerment.",
    },
  ];

  const achievements = [
    "15+ Years of Academic Excellence",
    "Consistent University Rank Holders",
    "Recognized for Women Empowerment Initiatives",
    "High Student Satisfaction over the years",
    "Award-Winning Cultural & NSS Programs",
    "Strong Alumni Network Across Industries",
  ];

  const whyChoose = [
    "Highly Qualified & Dedicated Faculty",
    "Safe & Secure Campus for Women",
    "Modern Classrooms & Digital Learning Tools",
    "Well-Equipped Computer Labs & Library",
    "Regular Workshops, Seminars & Career Training",
    "Personality Development & Soft Skills Programs",
    "Affordable Fee Structure With Scholarships",
    "Strong Academic Discipline & Mentoring",
    "Vibrant Campus Life with Clubs & Events",
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      {/* Hero Section */}
<section
  className="
    relative 
    py-20 text-white 
    bg-no-repeat bg-center bg-contain 
    overflow-hidden
  "
  style={{
    backgroundImage: "url('/src/assets/logo.png')",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 via-orange-600/80 to-red-600/80"></div>

  {/* Extra soft white fade for clean visibility */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">About Aadhya</h1>
      <p className="text-xl text-white/90">
        A premier institution dedicated to empowering women through quality education since 2010
      </p>
    </motion.div>
  </div>
</section>


      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Aadhya Women’s Degree College was founded in 2010 with a clear purpose — to empower young women through holistic, value-based, and industry-relevant education. Located in the educational heart of Hyderabad, we began with a mission to create an institution where women can learn confidently, dream fearlessly, and succeed powerfully.
                </p>
                <p>
                  Over the years, Aadhya has transformed into a trusted center of academic excellence. We believe education is not just about acquiring knowledge — it is about shaping character, building confidence, and preparing young women to excel in life, careers, and society.
                </p>
                <p>
                  With modern infrastructure, experienced faculty, personalized mentoring, and vibrant campus life, we ensure every student receives opportunities to explore her potential. Today, thousands of Aadhya graduates are excelling in corporate roles, government services, higher education, entrepreneurship, and leadership positions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements & Milestones */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Achievements & Milestones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of progress, commitment, and excellence in women’s education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-card hover:shadow-elegant transition-smooth"
              >
                <p className="text-lg font-semibold text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
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
              Our Guiding Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles drive our commitment to excellence in women's education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                  <CardHeader>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aadhya */}
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
              Why Choose Aadhya?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A learning environment built on excellence, care, and empowerment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-card hover:shadow-elegant transition-smooth"
              >
                <p className="text-lg text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal’s Message */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-card hover:shadow-elegant transition-smooth"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              Principal’s Message
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              “At Aadhya Women’s Degree College, we believe every young woman carries limitless
              potential. Our responsibility is to nurture her confidence, refine her strengths, and 
              empower her to lead with courage and compassion.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We focus on holistic education — a blend of academic excellence, discipline, values, 
              and personal growth. Through modern teaching methods, mentorship, and a strong support 
              system, we ensure that every student feels safe, valued, inspired, and prepared to 
              achieve her greatest ambitions.”
            </p>

            <p className="text-xl font-semibold text-primary mt-4 text-right">
              – Principal, Aadhya Women’s Degree College
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
