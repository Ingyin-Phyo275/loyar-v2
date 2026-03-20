"use client";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-efffect";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";
export default function Hero() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "All drivers are verified and vehicles are regularly inspected",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Book a ride anytime, day or night, wherever you are",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "4.9 star rating from over 100,000 happy customers",
    },
  ];

  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "Loyar", className: "text-primary" },
    { text: "Taxi" },
  ];
  return (
<section
  id="home"
  className="w-full max-w-7xl min-h-screen flex items-center justify-center pt-20 overflow-hidden relative"
>
  {/* <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-background" /> */}

  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="flex flex-col items-center text-center px-4"
  >
    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
      Your Trusted Ride Partner
    </span>

      <TypewriterEffect words={words} />

    <p className="text-lg text-muted-foreground mb-8 max-w-lg">
      Book your ride in seconds. Loyar Taxi offers safe, reliable, and
      affordable transportation services with professional drivers.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
      <Button
        size="lg"
        asChild
        className="hover:bg-white hover:text-primary hover:border-primary hover:border"
      >
        <a href="#book">
          Book a Ride <ArrowRight className="ml-2" size={18} />
        </a>
      </Button>
      <Button size="lg" variant="outline" asChild className="border border-primary">
        <a href="#services">View Services</a>
      </Button>
    </div>

    <div className="flex flex-wrap items-center gap-6 justify-center">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="flex items-center gap-2"
        >
          <feature.icon className="text-primary" size={20} />
          <span className="text-sm font-medium text-foreground">
            {feature.title}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
  );
}
