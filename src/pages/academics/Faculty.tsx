import { motion } from "framer-motion";
import { Users, Award, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Faculty = () => {
  const BRAND = {
    blue: "#0074C1",
    darkBlue: "#004A87",
    orange: "#F47B20",
    gold: "#F4C327",
  };

  const facultyList = [
  {
    name: "Dr. Asha",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=60",
    department: "Commerce",
    subjects: ["Financial Accounting", "Business Economics", "Taxation"],
    qualification: "Ph.D in Commerce",
    experience: "12 Years"
  },

  {
    name: "Prof. R. Raj",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60",
    department: "Computer Science",
    subjects: ["Data Structures", "Java Programming", "AI & ML Basics"],
    qualification: "M.Tech in Computer Science",
    experience: "10 Years"
  },

  {
    name: "Dr. Nisha",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=60",
    department: "Arts & Humanities",
    subjects: ["Psychology", "Sociology", "English Literature"],
    qualification: "Ph.D in Humanities",
    experience: "15 Years"
  },

  {
    name: "Prof. Meera Joshi",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60",
    department: "Mathematics",
    subjects: ["Calculus", "Statistics", "Discrete Math"],
    qualification: "M.Sc Mathematics",
    experience: "8 Years"
  },

  {
    name: "Dr. Suryakanth",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=60",
    department: "Science",
    subjects: ["Physics", "Electronics", "Nanotechnology"],
    qualification: "Ph.D in Physics",
    experience: "14 Years"
  },

  {
    name: "Prof. Anjali",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=500&q=60",
    department: "Management",
    subjects: ["Management Principles", "Business Law", "Marketing"],
    qualification: "MBA",
    experience: "9 Years"
  }
];


  const departments = [
    {
      name: "Arts & Humanities",
      faculty: 12,
      icon: <BookOpen className="w-12 h-12" style={{ color: BRAND.blue }} />,
    },
    {
      name: "Commerce & Management",
      faculty: 10,
      icon: <Users className="w-12 h-12" style={{ color: BRAND.orange }} />,
    },
    {
      name: "Science & Technology",
      faculty: 15,
      icon: <Award className="w-12 h-12" style={{ color: BRAND.gold }} />,
    },
  ];

  const testimonials = [
    {
      name: "Dr. Asha Rao",
      course: "Commerce",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=60",
      description:
        "Our commerce programs equip students with strong industry knowledge and financial literacy.",
    },
    {
      name: "Prof. R. Kumar",
      course: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60",
      description:
        "Technology and innovation drive student success through real-world learning.",
    },
    {
      name: "Dr. Nisha Patel",
      course: "Arts & Humanities",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=60",
      description:
        "We teach students to think critically, communicate clearly, and lead confidently.",
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ color: BRAND.darkBlue }}
          >
            Our Faculty
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: BRAND.blue }}>
            Experienced professors, modern teaching methods, and student-focused
            learning.
          </p>
        </motion.div>

        {/* Departments */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="p-4 rounded-full"
                    style={{ backgroundColor: BRAND.blue + "15" }}
                  >
                    {dept.icon}
                  </div>
                  <CardTitle className="text-xl" style={{ color: BRAND.darkBlue }}>
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <p className="text-4xl font-bold" style={{ color: BRAND.orange }}>
                    {dept.faculty}
                  </p>
                  <p className="text-gray-500">Faculty Members</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Excellence Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-10 mb-24 shadow-xl"
          style={{ backgroundColor: BRAND.blue }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <GraduationCap className="w-8 h-8" style={{ color: BRAND.gold }} />
            Faculty Excellence
          </h2>

          <ul className="space-y-4 text-lg text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-xl" style={{ color: BRAND.gold }}>
                •
              </span>
              Highly qualified faculty with PhDs and global academic experience.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl" style={{ color: BRAND.gold }}>
                •
              </span>
              Regular workshops, faculty development programs & research activities.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl" style={{ color: BRAND.gold }}>
                •
              </span>
              Supportive mentoring system for student success.
            </li>
          </ul>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold mb-3"
            style={{ color: BRAND.darkBlue }}
          >
            Faculty Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our educators share their experiences and passion for teaching.
          </p>
        </motion.div>

        
        

        <div className="grid md:grid-cols-3 gap-10 mt-10">
        {facultyList.map((faculty, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-2xl shadow-lg bg-white p-6 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-28 h-28 rounded-full object-cover mx-auto shadow-md border-4"
              style={{ borderColor: BRAND.blue }}
            />

            <h3 className="text-2xl font-semibold mt-3" style={{ color: BRAND.darkBlue }}>
              {faculty.name}
            </h3>

            <p className="text-sm font-medium" style={{ color: BRAND.orange }}>
              {faculty.department}
            </p>

            <p className="text-gray-600 mt-3 text-sm">
              <strong>Qualification:</strong> {faculty.qualification}
            </p>

            <p className="text-gray-600 text-sm">
              <strong>Experience:</strong> {faculty.experience}
            </p>

            <div
              className="mt-4 py-3 rounded-xl text-white text-sm"
              style={{ backgroundColor: BRAND.blue }}
            >
              <strong>Subjects:</strong>
              <ul className="mt-2 space-y-1 text-white/90">
                {faculty.subjects.map((sub, i) => (
                  <li key={i}>• {sub}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Faculty;
