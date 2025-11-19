import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Megaphone } from "lucide-react";

const announcements = [
  {
    id: 1,
    text: "🎓 Admissions Open for 2025-26 Academic Year! Apply Now",
    link: "/admissions",
  },
  {
    id: 2,
    text: "🏆 Aadhya College Ranked Among Top Women's Colleges in Telangana",
    link: "/about",
  },
  {
    id: 3,
    text: "📚 New Courses Added: BCA, B.Sc. Data Science & AI",
    link: "/courses",
  },
  {
    id: 4,
    text: "💼 100% Placement Record for 2023 Batch - Join Our Success Story",
    link: "/about",
  },
];

const AnnouncementsBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center space-x-3 flex-1 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            className="flex-shrink-0"
          >
            <Megaphone className="w-5 h-5" />
          </motion.div>
          
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.a
                key={currentIndex}
                href={announcements[currentIndex].link}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block text-sm md:text-base font-medium hover:underline cursor-pointer"
              >
                {announcements[currentIndex].text}
              </motion.a>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-4">
          <div className="hidden sm:flex space-x-1">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-smooth p-1 hover:bg-white/10 rounded"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsBar;
