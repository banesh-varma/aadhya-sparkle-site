import { motion } from "framer-motion";
import { Music, Palette, Camera, Globe, Heart, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Clubs = () => {
  const clubs = [
    {
      icon: <Music className="w-10 h-10 text-primary" />,
      name: "Music & Dance Club",
      description: "Express yourself through music and dance performances",
    },
    {
      icon: <Palette className="w-10 h-10 text-secondary" />,
      name: "Art & Craft Club",
      description: "Unleash your creativity through various art forms",
    },
    {
      icon: <Camera className="w-10 h-10 text-accent" />,
      name: "Photography Club",
      description: "Capture moments and develop photography skills",
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      name: "Cultural Club",
      description: "Celebrate diversity and organize cultural events",
    },
    {
      icon: <Heart className="w-10 h-10 text-secondary" />,
      name: "Social Service Club",
      description: "Make a difference through community service",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-accent" />,
      name: "Innovation Club",
      description: "Develop innovative solutions and entrepreneurial skills",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clubs & Activities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant clubs and discover your passions beyond academics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                <CardHeader>
                  <div className="mb-4">{club.icon}</div>
                  <CardTitle className="text-xl">{club.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{club.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
