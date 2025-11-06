import { motion } from "framer-motion";
import { Calendar, PartyPopper, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Cultural Festival",
      date: "March 15-17, 2024",
      description: "Three days of cultural performances, competitions, and celebrations",
    },
    {
      title: "Tech Symposium",
      date: "April 5, 2024",
      description: "Technology exhibition and workshops on latest innovations",
    },
    {
      title: "Sports Day",
      date: "April 20, 2024",
      description: "Inter-departmental sports competitions and athletic events",
    },
  ];

  const eventTypes = [
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      name: "Academic Events",
      description: "Seminars, workshops, and guest lectures",
    },
    {
      icon: <PartyPopper className="w-10 h-10 text-secondary" />,
      name: "Cultural Festivals",
      description: "Annual fest, traditional celebrations, and competitions",
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      name: "Social Events",
      description: "Community service, awareness programs, and charity drives",
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
            Events & Celebrations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience vibrant campus life through our diverse events and celebrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-card hover:shadow-elegant transition-smooth h-full">
                <CardHeader>
                  <div className="mb-4">{type.icon}</div>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <CardTitle className="text-xl mb-2 md:mb-0">{event.title}</CardTitle>
                      <span className="text-sm text-primary font-semibold">{event.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
