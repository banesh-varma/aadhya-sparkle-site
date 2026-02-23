import { useState } from "react";
import { motion } from "framer-motion";
import { X, Megaphone } from "lucide-react";

const announcements = [
  {
    id: 1,
    text: "🏆 Aadhya College Ranked Among Top Women's Colleges in Telangana",
    link: "/about",
  },
  {
    id: 2,
    text: "📅 Click here to download Inter Timetable (2025-26)",
    link: "/inter_timetable.pdf",
    download: true,
  },
];

const AnnouncementsBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-3 md:px-4 relative overflow-hidden">

      <div className="container mx-auto flex items-center justify-between relative">

        {/* Left Section */}
        <div className="flex items-center space-x-3 flex-1 overflow-hidden">

          {/* Icon */}
          <Megaphone className="w-5 h-5 flex-shrink-0 animate-pulse" />

          {/* Scrolling Text */}
          <div className="overflow-hidden whitespace-nowrap w-full">
            <motion.div
              className="inline-flex space-x-16"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear",
              }}
            >
              {/* First Set */}
              {announcements.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target={item.download ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  download={item.download || false}
                  className="font-medium text-lg hover:underline cursor-pointer"
                >
                  {item.text}
                </a>
              ))}

              {/* Duplicate Set for seamless loop */}
              {announcements.map((item) => (
                <a
                  key={`dup-${item.id}`}
                  href={item.link}
                  target={item.download ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  download={item.download || false}
                  className="font-medium text-lg hover:underline cursor-pointer"
                >
                  {item.text}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white/80 hover:text-white transition-all p-1 hover:bg-white/10 rounded"
        >
          <X size={18} />
        </button>

      </div>
    </div>
  );
};

export default AnnouncementsBar;

